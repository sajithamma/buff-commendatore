export interface Topic {
  text: string;
  messages: number;
  heat: "red" | "orange" | "yellow" | "gray";
}

export interface Buff {
  state: "live" | "result";
  question: string;
  options?: string[];
  timeLeft?: number;
  winner?: string;
  winnerPct?: number;
  loser?: string;
  loserPct?: number;
  other?: string;
  totalVotes?: number;
}

export interface PinnedChat {
  text: string;
  user: string;
  time: string;
}

export const topicSets: Topic[][] = [
  [
    { text: "Mbappé looks injured after that tackle", messages: 423, heat: "red" },
    { text: "VAR should have given a penalty", messages: 312, heat: "orange" },
    { text: "Bring on Dembélé for the second half", messages: 198, heat: "yellow" },
    { text: "Bellingham having a quiet game", messages: 87, heat: "gray" },
    { text: "Donnarumma commanding the box tonight", messages: 64, heat: "gray" },
    { text: "Hakimi overlapping every attack", messages: 43, heat: "gray" },
    { text: "Crowd chanting Mbappé's name", messages: 29, heat: "gray" },
  ],
  [
    { text: "GOAL! Mbappé scores despite the injury!", messages: 891, heat: "red" },
    { text: "What a cross from Hakimi", messages: 445, heat: "orange" },
    { text: "PSG deserved that lead", messages: 267, heat: "yellow" },
    { text: "Real Madrid need to wake up", messages: 134, heat: "gray" },
    { text: "Ancelotti looks furious on the touchline", messages: 98, heat: "gray" },
    { text: "That celebration was iconic", messages: 72, heat: "gray" },
    { text: "Commentators going absolutely wild", messages: 41, heat: "gray" },
  ],
  [
    { text: "Vinícius Jr with a stunning dribble", messages: 567, heat: "red" },
    { text: "This match deserves extra time", messages: 389, heat: "orange" },
    { text: "Both keepers having incredible games", messages: 234, heat: "yellow" },
    { text: "The atmosphere must be electric", messages: 156, heat: "gray" },
    { text: "Midfield battle is intense tonight", messages: 112, heat: "gray" },
    { text: "Sub incoming for Real Madrid", messages: 78, heat: "gray" },
    { text: "Fans on their feet non-stop", messages: 35, heat: "gray" },
  ],
];

export const buffSequence: Buff[] = [
  { state: "live", question: "Who will score next?", options: ["Mbappé", "Haaland", "Vinícius"], timeLeft: 12 },
  { state: "result", question: "Who will score next?", winner: "Mbappé", winnerPct: 67, loser: "Bellingham", loserPct: 33, totalVotes: 6318 },
  { state: "live", question: "Will there be a red card?", options: ["Yes", "No"], timeLeft: 12 },
  { state: "result", question: "Will there be a red card?", winner: "No", winnerPct: 73, loser: "Yes", loserPct: 27, totalVotes: 6102 },
  { state: "live", question: "Man of the match so far?", options: ["Mbappé", "Bellingham", "Donnarumma"], timeLeft: 12 },
];

export const pinnedChats: PinnedChat[] = [
  { text: "That save by Donnarumma was absolutely world class! Best I've seen all season", user: "@football_fanatic", time: "2 min ago" },
  { text: "Mbappé has been running the show, completely different under the new coach", user: "@sarah_madrid", time: "4 min ago" },
  { text: "Anyone else think the ref is having a shocker?", user: "@premier_pundit", time: "6 min ago" },
  { text: "This is why Champions League nights are special", user: "@ucl_lover", time: "1 min ago" },
  { text: "Hakimi is the most underrated full-back in world football", user: "@psg_faithful", time: "3 min ago" },
  { text: "Need Dembélé on ASAP, this right side is wide open", user: "@tactics_nerd", time: "5 min ago" },
  { text: "12 million watching and it's worth every second", user: "@sports_daily", time: "30 sec ago" },
];

export const tickerMessages: string[] = [
  "@ahmed_92: Can't believe what a match this is!",
  "@maria_fcb: Mbappé is unstoppable tonight",
  "@john_uk: Best CL game in years",
  "@tokyo_fan: Watching from Japan, 4am and worth it!",
  "@rio_verde: GOLAZO! What a strike!",
  "@soccermom: My kids are screaming at the TV",
  "@pundit_paul: Tactical masterclass from both coaches",
  "@dubai_sports: The stadium is ROCKING",
];

export const allChats = [
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
  { user: "@ucl_lover", text: "Champions League never disappoints", time: "1m ago" },
  { user: "@tactics_nerd", text: "The pressing from PSG is relentless", time: "1m ago" },
  { user: "@sports_daily", text: "Trending #1 worldwide right now", time: "1m ago" },
  { user: "@dubai_sports", text: "Every tackle is a battle", time: "2m ago" },
  { user: "@pundit_paul", text: "Both managers earning their salary tonight", time: "2m ago" },
  { user: "@la_liga_fan", text: "Real Madrid missing Kroos badly", time: "2m ago" },
  { user: "@footy_stats", text: "72% possession for PSG this half", time: "2m ago" },
  { user: "@match_day", text: "The noise level must be incredible", time: "3m ago" },
  { user: "@goal_machine", text: "Mbappé has 6 shots already", time: "3m ago" },
  { user: "@neutral_fan", text: "As a neutral this is a dream game", time: "3m ago" },
  { user: "@keeper_coach", text: "Donnarumma's positioning is textbook", time: "3m ago" },
  { user: "@ref_watch", text: "That was never offside, terrible call", time: "4m ago" },
  { user: "@psg_ultra", text: "Le Parc is on fire tonight!", time: "4m ago" },
  { user: "@madrid_ultra", text: "Hala Madrid! We always come back", time: "4m ago" },
  { user: "@halftime_tea", text: "My heart can't take much more of this", time: "4m ago" },
  { user: "@footy_memes", text: "The memes from this game will be elite", time: "5m ago" },
  { user: "@commentator_fan", text: "The commentary is fire tonight too", time: "5m ago" },
  { user: "@stats_guru", text: "Expected goals: PSG 2.1 - RM 0.8", time: "5m ago" },
  { user: "@casual_viewer", text: "Even I'm hooked and I don't watch football", time: "5m ago" },
  { user: "@super_sub", text: "Dembélé warming up on the sideline!", time: "6m ago" },
];
