# Hide and Seek (three.js)

Browser port of the Unity `hide-and-seek` prototype: the slasher house with its 49 hiding
spots, 30 s to hide, 5 min hunt, cop-car rescue. Four survivors and one killer; every seat a
human does not take is a bot (the Unity SurvivorAI / KillerSearchDirector behaviour).

Multiplayer is **peer-to-peer over WebRTC** (PeerJS). The host's browser runs the match; friends
join with a 4-letter code. Works PC (mouse + keyboard) and iPad (touch), no server of your own.

## Run it

```bash
npm install
npm run dev
```

`npm run dev` prints two URLs. `http://localhost:5173` is for you; the `http://192.168.x.x:5173`
one is for anybody on the **same Wi-Fi** (your friend's iPad). Open it in Safari, tap Join, type the code.

For friends **over the internet** the page has to be reachable by them, so publish the static build:

```bash
npm run build
```

and upload the `dist/` folder to any static host (Netlify Drop, GitHub Pages, itch.io as an HTML
game, Cloudflare Pages…). Everyone opens that URL; the host clicks *Host a lobby*, the rest join
with the code (or the `?code=XXXX` link shown in the lobby). Game traffic goes browser-to-browser;
only the handshake uses the public PeerJS signalling server. If a connection never completes
(strict NAT / some mobile carriers), one of you needs a TURN server — see `PEER_OPTS` in
`src/net.js`.

## Controls

| | PC | iPad |
|---|---|---|
| Move | W A S D | left stick |
| Look | mouse (click the game to capture it, Esc releases) | drag on the right half |
| Hide / come out / open a spot | E | HIDE / OPEN button |
| Attack (killer) | left mouse button | ATTACK button |
| Next camera (spectating) | Tab | NEXT button |
| Skip the briefing / play again | Space / R (host) | – |

While hidden and the killer is close you get the breath minigame every 10 s: slide the bar
(mouse, A/D, or finger) to dodge the falling blocks — a hit means you gasp and he hears it.

## What is where

- `src/plan.js` – the house, furniture, hiding spots, search rooms, lights, spawn points, ported
  from `SlasherHouseBuilder` / `HideAndSeekHouseDetailer` / `HideAndSeekBuilder` (plan units × 1.3).
- `src/house.js` – merges it into one mesh with the grid tint, builds the collision world and the
  movable covers (louvred doors, curtains, lids, gate).
- `src/collision.js`, `src/nav.js` – box collision with step-up, walkability grid + A* for bots.
- `src/game.js` – the host-side match: phases, hiding/checking/attacks, survivor bots, the
  room-by-room killer director, noise clues, rescue.
- `src/net.js` – PeerJS host/client transport. `src/main.js` – the client (input, cameras, HUD).
- `src/audio.js` – slasher-camp ambience + encounter sting, footsteps, screams, plus the
  synthesised heartbeat / creaks / siren. `src/minigame.js` – breath minigame.

Not ported (yet): fire spread / arson, the microphone noise input, the killer's lighter and gas cans.
