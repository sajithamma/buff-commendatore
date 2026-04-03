# Buff Commentator Screen — Full Requirements

## What This Is

A **read-only dashboard** for a TV sports commentator during a live match. The commentator has this on an iPad or MacBook next to them while they're on air. They glance at it and speak based on what they see. It must be readable from 2 feet away, glanceable in 2 seconds.

This is part of **Join in Live (JIL)** — a real-time audience engagement platform for live sports. Viewers watch a match, vote on polls ("buffs"), and send live chat messages. The commentator sees a curated summary of all this audience activity.

## Tech Stack

- **Preact** (same as React, but lighter — use `import { render } from "preact"` and `import { useState, useEffect } from "preact/hooks"`)
- **Vite** for dev server
- **No backend needed** — all data is hardcoded/simulated in the frontend for this prototype
- Full screen, no scrolling on default view
- Target: iPad landscape (1194x834) and MacBook (1440x900)

## The Design (EXACT layout to implement)

Reference image: A dark-themed dashboard with this layout:

```
┌──────────────────────────────────────────────────────────────────┐
│  ● LIVE   JIL Commentator    PSG vs Real Madrid · 67:23  👁 12,847│
├──────────────────────────────────────────┬───────────────────────┤
│                                          │   ACTIVE BUFF         │
│   HOT TOPICS                             │   (white card)        │
│   🔥 WHAT FANS ARE SAYING               │   Poll question +     │
│                                          │   options              │
│   "Mbappé looks injured                  │                       │
│    after that tackle"     ← 32px HUGE    ├───────────────────────┤
│   ████████████████████ 423 messages      │   LAST RESULT         │
│                                          │   (dark card)         │
│   "VAR should have given a penalty"      │   Winner + percentage │
│                          ● 312 messages  │                       │
│   "Bring on Dembélé..."                  ├───────────────────────┤
│                          ● 198 messages  │   LIVE STATS          │
│   "Bellingham having a quiet game"       │   (white card)        │
│                            87 messages   │   Viewers, messages,  │
│   (dark card, ~65% width)                │   buffs sent          │
├──────────────────────────────────────────┤   (~35% width)        │
│   PINNED CHATS                           │                       │
│   📌 HIGHLIGHTED FANS                    │                       │
│   (white card, ~65% width)               │                       │
│   3 fan quotes side by side              │                       │
├──────────────────────────────────────────┴───────────────────────┤
│  ● Live View    ○ All Chats    ○ Vote Progress    ticker...      │
└──────────────────────────────────────────────────────────────────┘
```

## Color Palette

```
Page background:     #1a1a1a (dark, near black — this is a broadcast screen)
Dark cards:          #1c1c1e (hot topics card)
White cards:         #ffffff (active buff, pinned chats, live stats)
Top bar:             #1c1c1e
Bottom bar:          #2c2c2e

Text on dark:        #ffffff (primary), #636366 (secondary), #98989d (tertiary)
Text on white:       #000000 (primary), #8e8e93 (secondary)

Accent red:          #ff3b30 (LIVE dot, hot topics, trending)
Accent green:        #34c759 (active buff, poll live)
Accent orange:       #ff9500 (viewer count, results)
Accent purple:       #af52de (pinned chats, usernames)
Accent blue:         #007aff (option letters, active tab)

Progress bars:       #ff3b30 (hot topic heat bar)
Result bars:         #ffffff fill on #2c2c2e track
```

## Typography

```
Font family:         'Inter', -apple-system, system-ui, sans-serif
Monospace numbers:   'SF Mono', 'JetBrains Mono', monospace

Viewer count:        36px weight 800 monospace #ff9500
Hero topic (#1):     32px weight 800 #ffffff
Question (buff):     18px weight 700 #000000
Result winner:       28px weight 800 #ffffff
Topic #2:            20px weight 600 #d1d1d6
Topic #3:            16px weight 500 #98989d
Topic #4:            14px weight 400 #636366
Labels:              11px weight 700 uppercase letter-spacing 0.12em
Body:                15px weight 500
Small:               12px weight 500
```

## Detailed Widget Specifications

### TOP BAR
- Height: 56px, background #1c1c1e, full width, fixed top
- Left: Pulsing red circle (CSS animation, 12px, `#ff3b30`) + "LIVE" in red bold + "JIL Commentator" in #636366
- Center: "PSG vs Real Madrid · 67:23" in white 16px weight 600
- Right: Eye icon (👁 or SVG) + "12,847" in #ff9500 36px weight 800 monospace — THE most prominent number in the bar

### HOT TOPICS (left column, top — dark card #1c1c1e)
This is the HERO area — the biggest visual element on screen.

- Card: background #1c1c1e, border-radius 20px, padding 24px
- Takes ~65% width, ~55% of the area between top bar and bottom bar
- Label: "HOT TOPICS" in 13px #ffffff weight 700 + line break + "🔥 WHAT FANS ARE SAYING" in 12px #ff3b30 uppercase weight 700
- Right-aligned subtitle: "From 1,247 messages in last 5 min" in 11px #636366

**Topic 1 (hero topic):**
- Text: "Mbappé looks injured after that tackle" in 32px weight 800 #ffffff
- Below: red heat bar — full-width strip, 6px height, #ff3b30, with "423 messages" right-aligned in 13px #ff3b30
- This topic takes up ~40% of the card height

**Topic 2:**
- Text: "VAR should have given a penalty" in 20px weight 600 #d1d1d6
- Right: orange dot (10px #ff9500) + "312 messages" in 12px #ff9500

**Topic 3:**
- Text: "Bring on Dembélé for the second half" in 16px weight 500 #98989d
- Right: yellow dot (8px #ffcc00) + "198 messages" in 12px #98989d

**Topic 4:**
- Text: "Bellingham having a quiet game" in 14px weight 400 #636366
- Right: "87 messages" in 11px #636366

Visual cascade: each topic is smaller, dimmer, less prominent than the one above.

### PINNED CHATS (left column, bottom — white card)
- Card: background #ffffff, border-radius 20px, padding 20px
- Takes ~65% width, ~35% of the left column height
- Label: "PINNED CHATS" in 13px #000000 weight 700 + line break + "📌 HIGHLIGHTED FANS" in 12px #af52de uppercase weight 700

**Three pinned messages displayed HORIZONTALLY (side by side, not stacked):**

Each message card:
- Background: #f9f5ff (very light purple tint), border-radius 14px, padding 16px
- Left border: 3px solid #af52de
- Message text: 15px weight 500 #000000
- Username: 13px weight 600 #af52de (e.g., "@football_fanatic")
- Timestamp: 11px #8e8e93 (e.g., "2 min ago")

Messages:
1. "That save by Donnarumma was absolutely world class! Best I've seen all season" — @football_fanatic · 2 min ago
2. "Mbappé has been running the show, completely different under the new coach" — @sarah_madrid · 4 min ago
3. "Anyone else think the ref is having a shocker?" — @premier_pundit · 6 min ago

### ACTIVE BUFF (right sidebar, top — white card)
- Card: background #ffffff, border-radius 20px, padding 20px
- Takes ~35% width
- Green dot + "POLL LIVE" in 11px #34c759 weight 700
- Question: "Who will score next?" in 18px weight 700 #000000
- Options in a compact inline row: "A Mbappé · B Haaland · C Vinícius" in 14px #3a3a3c
  - Letter prefixes (A, B, C) in #007aff bold
  - Displayed inside a light gray pill/badge row
- "⏱ 45s left" in 13px #34c759
- "Tell viewers to vote!" in 12px #8e8e93 italic

### LAST RESULT (right sidebar, middle — dark card)
- Card: background #1c1c1e, border-radius 20px, padding 20px
- "LAST RESULT" in 11px #ff9500 weight 700 uppercase
- "RESULT" label in 13px #ff9500 weight 700
- Winner: "Mbappé 67%" in 28px weight 800 #ffffff
- Bar: thin (6px) white fill on dark track (#2c2c2e), 67% width
- "vs Bellingham 33% · 6,318 votes" in 12px #636366
- "3 min ago" in 11px #636366

### LIVE STATS (right sidebar, bottom — white card)
- Card: background #ffffff, border-radius 20px, padding 20px
- "LIVE STATS" in 13px #000000 weight 700 + "MATCH" in 11px #8e8e93 uppercase
- Three rows:
  - "👁 12,847 viewers" in 18px weight 700 #000000
  - "💬 1,247 messages" in 16px weight 600 #3a3a3c
  - "🗳 4/12 buffs sent" in 14px weight 500 #8e8e93

### BOTTOM BAR
- Height: 44px, background #2c2c2e, full width, fixed bottom
- Left: Three tabs
  - "Live View" — active: #ffffff weight 700 with blue dot (6px #007aff) to the left
  - "All Chats" — gray dot + #8e8e93 weight 500
  - "Vote Progress" — gray dot + #8e8e93 weight 500
- Right: Scrolling ticker — "💬 @ahmed_92: Can't believe what a match this is..." in 12px #8e8e93, CSS marquee animation, scrolling right to left

## Animations & Effects

### Pulsing LIVE dot
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}
/* Apply: animation: pulse 2s ease-in-out infinite */
```

### Topic entry animation
When a new topic appears (simulated), it slides in from left with fade:
```css
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
/* Apply: animation: slideIn 0.4s ease-out */
```

### Heat bar animation
The red heat bar for topic #1 should animate its width from 0 to full over 1 second on initial load.

### Viewer count tick
Simulate viewer count incrementing — every 3-5 seconds, the number ticks up by 1-5. Use a smooth CSS transition on the number change.

### Chat ticker scroll
Bottom bar ticker scrolls continuously right to left, ~60px/second. When it finishes, loops with the next message.

### New pinned chat
When a new pin arrives (simulated every 30 seconds), the rightmost card slides out right, new card slides in from left. All three cards shift.

## Simulated Data & Timing

Since there's no backend, simulate the live experience with JavaScript timers:

### Match timer
- Start at 67:23, increment every second. Display as "67:23", "67:24", etc.

### Viewer count
- Start at 12,847. Every 3-5 seconds, add random 1-8. Occasionally subtract 1-3.

### Hot topics (rotate every 20 seconds)
```javascript
const topicSets = [
  [
    { text: "Mbappé looks injured after that tackle", messages: 423, heat: "red" },
    { text: "VAR should have given a penalty", messages: 312, heat: "orange" },
    { text: "Bring on Dembélé for the second half", messages: 198, heat: "yellow" },
    { text: "Bellingham having a quiet game", messages: 87, heat: "gray" },
  ],
  [
    { text: "GOAL! Mbappé scores despite the injury!", messages: 891, heat: "red" },
    { text: "What a cross from Hakimi", messages: 445, heat: "orange" },
    { text: "PSG deserved that lead", messages: 267, heat: "yellow" },
    { text: "Real Madrid need to wake up", messages: 134, heat: "gray" },
  ],
  [
    { text: "Vinícius Jr with a stunning dribble", messages: 567, heat: "red" },
    { text: "This match deserves extra time", messages: 389, heat: "orange" },
    { text: "Both keepers having incredible games", messages: 234, heat: "yellow" },
    { text: "The atmosphere must be electric", messages: 156, heat: "gray" },
  ],
];
// Rotate through sets every 20 seconds with slide animation
```

### Active buff (changes at specific times)
```javascript
const buffSequence = [
  // Starts with this buff active
  { state: "live", question: "Who will score the next goal?", options: ["Mbappé", "Haaland", "Vinícius Jr"], timeLeft: 45 },
  // After 45 seconds, buff closes, result appears
  { state: "result", question: "Who will score the next goal?", winner: "Mbappé", winnerPct: 52, loser: "Haaland", loserPct: 31, other: "Vinícius 17%", totalVotes: 8421 },
  // After 15 seconds, new buff
  { state: "live", question: "Will there be a red card?", options: ["Yes", "No"], timeLeft: 60 },
  // After 60 seconds, result
  { state: "result", question: "Will there be a red card?", winner: "No", winnerPct: 73, loser: "Yes", loserPct: 27, totalVotes: 6102 },
  // After 15 seconds, new buff
  { state: "live", question: "Man of the match so far?", options: ["Mbappé", "Bellingham", "Donnarumma"], timeLeft: 90 },
];
// Timer counts down timeLeft, then transitions to result, then next buff
```

### Pinned chats (rotate every 30 seconds)
```javascript
const pinnedChats = [
  { text: "That save by Donnarumma was absolutely world class! Best I've seen all season", user: "@football_fanatic", time: "2 min ago" },
  { text: "Mbappé has been running the show, completely different under the new coach", user: "@sarah_madrid", time: "4 min ago" },
  { text: "Anyone else think the ref is having a shocker?", user: "@premier_pundit", time: "6 min ago" },
  { text: "This is why Champions League nights are special", user: "@ucl_lover", time: "1 min ago" },
  { text: "Hakimi is the most underrated full-back in world football", user: "@psg_faithful", time: "3 min ago" },
  { text: "Need Dembélé on ASAP, this right side is wide open", user: "@tactics_nerd", time: "5 min ago" },
  { text: "12 million watching and it's worth every second", user: "@sports_daily", time: "30 sec ago" },
];
// Show 3 at a time, slide in new one every 30 seconds
```

### Chat ticker messages (bottom bar, continuous)
```javascript
const tickerMessages = [
  "@ahmed_92: Can't believe what a match this is!",
  "@maria_fcb: Mbappé is unstoppable tonight",
  "@john_uk: Best CL game in years",
  "@tokyo_fan: Watching from Japan, 4am and worth it!",
  "@rio_verde: GOLAZO! What a strike!",
  "@soccermom: My kids are screaming at the TV",
  "@pundit_paul: Tactical masterclass from both coaches",
  "@dubai_sports: The stadium is ROCKING",
];
// Scroll one message at a time, left to right, loop continuously
```

## Tab Views (when clicked)

### Default: "Live View"
The main 4-widget layout described above. This is shown 95% of the time.

### "All Chats" tab
- Full-screen dark background (#1c1c1e)
- Scrolling chat feed, newest at top
- Each message: username in #af52de, message in #ffffff, timestamp in #636366
- Messages appear every 1-2 seconds (simulated)
- Auto-scrolls to keep newest visible
- Simulate 30+ messages:
```javascript
const allChats = [
  { user: "@ahmed_92", text: "Can't believe what a match this is!", time: "just now" },
  { user: "@maria_fcb", text: "Mbappé is unstoppable tonight 🔥", time: "10s ago" },
  { user: "@john_uk", text: "Best CL game in years honestly", time: "15s ago" },
  { user: "@football_fanatic", text: "That save was INSANE", time: "22s ago" },
  { user: "@sarah_madrid", text: "Bellingham needs to step up", time: "30s ago" },
  { user: "@tokyo_fan", text: "4am in Tokyo and I'm wide awake!", time: "35s ago" },
  { user: "@premier_pundit", text: "The ref is losing control", time: "40s ago" },
  { user: "@psg_faithful", text: "Allez Paris! 💪", time: "45s ago" },
  { user: "@rio_verde", text: "What a cross from Hakimi", time: "50s ago" },
  { user: "@soccermom", text: "Kids won't go to sleep after this", time: "55s ago" },
  // ... continue for 30+ messages
];
```

### "Vote Progress" tab
- Full-screen showing the current active buff with LIVE vote counts updating
- Big question in center: 32px weight 800
- Large horizontal bars showing real-time percentages
- Bars animate as votes come in (simulated — update every 2 seconds)
- Total vote counter ticking up

## File Structure

```
buff-commendatore/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx          # Entry point, router
│   ├── data.ts           # All simulated data (topics, buffs, chats, etc.)
│   ├── hooks/
│   │   └── useSimulation.ts  # Timer hooks for rotating data
│   └── components/
│       ├── TopBar.tsx
│       ├── HotTopics.tsx
│       ├── PinnedChats.tsx
│       ├── ActiveBuff.tsx
│       ├── LastResult.tsx
│       ├── LiveStats.tsx
│       ├── BottomBar.tsx
│       ├── Ticker.tsx
│       ├── AllChatsView.tsx
│       └── VoteProgressView.tsx
├── REQUIREMENTS.md       # This file
└── README.md
```

## Setup Commands

```bash
npm create vite@latest . -- --template preact-ts
npm install
npm run dev
# Opens on localhost:5173
```

## Key Behaviors

1. **Full screen, no scroll** on default view — everything fits in viewport
2. **100vw × 100vh** — use the entire browser window
3. **Hot topics rotate** every 20 seconds with slide animation
4. **Buff countdown** timer ticks down, transitions to result, then new buff
5. **Viewer count** ticks up live
6. **Pinned chats** rotate every 30 seconds
7. **Bottom ticker** scrolls continuously
8. **Tabs switch** between Live View / All Chats / Vote Progress
9. **No user interaction needed** on Live View — it's a TV screen

## What is a "Buff"?

A buff is an interactive poll/question sent to live viewers during a sports match. Think of it like a mini-game:
- Operator creates a question: "Who will score next?"
- Sends it live to all viewers watching the match
- Viewers vote on their phones/tablets
- Results are calculated in real-time
- Commentator announces the result on air

Types of buffs: Poll, Predict, Trivia, Rating, Emoji reaction, Versus, Countdown, Prize giveaway. For this prototype, focus on Poll type (question + 2-3 options + vote).

## Priority

1. Get the layout pixel-perfect first — all 6 widgets in the right positions and sizes
2. Add the simulated data
3. Add animations (pulse, slide, ticker)
4. Add tab switching
5. Polish typography and spacing
