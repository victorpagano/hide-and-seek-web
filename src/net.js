// Peer-to-peer transport on PeerJS (WebRTC data channels through the public PeerJS
// signalling server). The host owns the sim; clients only ever talk to the host.
import Peer from 'peerjs';

const PREFIX = 'hs-house-';
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
export const randomCode = () => Array.from({ length: 4 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');

const PEER_OPTS = {
  debug: 1,
  config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }] },
};

/** Host side: accepts connections, routes messages to the sim, and includes a loopback for the host's own client. */
export class HostNet {
  constructor(code) {
    this.code = code;
    this.conns = new Map(); // peerId -> DataConnection
    this.onMessage = null;  // (peerId, msg)
    this.onLeave = null;
    this.localHandler = null; // (msg) for the host's own client
    this.peer = null;
  }
  open() {
    return new Promise((resolve, reject) => {
      const peer = new Peer(PREFIX + this.code, PEER_OPTS);
      this.peer = peer;
      let settled = false;
      peer.on('open', () => { settled = true; resolve(this.code); });
      peer.on('error', (err) => {
        if (!settled) { settled = true; reject(err); }
        else console.warn('peer error', err);
      });
      peer.on('connection', (conn) => {
        conn.on('open', () => {
          this.conns.set(conn.peer, conn);
          conn.on('data', (msg) => { if (this.onMessage) this.onMessage(conn.peer, msg); });
          conn.on('close', () => { this.conns.delete(conn.peer); if (this.onLeave) this.onLeave(conn.peer); });
          conn.on('error', () => { this.conns.delete(conn.peer); if (this.onLeave) this.onLeave(conn.peer); });
        });
      });
    });
  }
  /** send(to, msg): 'all' | 'host' | peerId */
  send(to, msg) {
    if (to === 'all') {
      if (this.localHandler) this.localHandler(msg);
      for (const c of this.conns.values()) safeSend(c, msg);
    } else if (to === 'host') {
      if (this.localHandler) this.localHandler(msg);
    } else {
      const c = this.conns.get(to);
      if (c) safeSend(c, msg);
    }
  }
  /** The host's own client sending to the sim. */
  localSend(msg) { if (this.onMessage) this.onMessage('host', msg); }
  close() { try { this.peer && this.peer.destroy(); } catch {} }
}

/** Client side: one connection to the host. */
export class ClientNet {
  constructor(code) {
    this.code = code;
    this.onMessage = null;
    this.onClose = null;
    this.conn = null;
    this.peer = null;
  }
  open() {
    return new Promise((resolve, reject) => {
      const peer = new Peer(undefined, PEER_OPTS);
      this.peer = peer;
      let settled = false;
      const fail = (err) => { if (!settled) { settled = true; reject(err); } };
      peer.on('error', (err) => { fail(err); if (settled && this.onClose) this.onClose(err); });
      peer.on('open', () => {
        const conn = peer.connect(PREFIX + this.code, { reliable: true, serialization: 'json' });
        this.conn = conn;
        const timer = setTimeout(() => fail(new Error('No lobby with that code (timed out).')), 12000);
        conn.on('open', () => { clearTimeout(timer); settled = true; resolve(); });
        conn.on('data', (msg) => { if (this.onMessage) this.onMessage(msg); });
        conn.on('close', () => { if (this.onClose) this.onClose(); });
        conn.on('error', (err) => { clearTimeout(timer); fail(err); });
      });
    });
  }
  send(msg) { if (this.conn && this.conn.open) safeSend(this.conn, msg); }
  close() { try { this.peer && this.peer.destroy(); } catch {} }
}

function safeSend(conn, msg) { try { conn.send(msg); } catch (e) { /* connection mid-close */ } }
