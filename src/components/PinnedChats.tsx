import { usePinnedChats } from "../hooks/useSimulation";

export function PinnedChats() {
  const { chats, animKey } = usePinnedChats();

  return (
    <div class="card white-card pinned-chats">
      <div class="card-label dark">PINNED CHATS</div>
      <div class="card-sublabel pinned-sublabel">📌 HIGHLIGHTED FANS</div>
      <div class="pinned-list" key={animKey}>
        {chats.map((chat, i) => (
          <div class="pinned-card slide-in" style={`animation-delay: ${i * 0.05}s`} key={`${animKey}-${i}`}>
            <div class="pinned-text">{chat.text}</div>
            <div class="pinned-meta">
              <span class="pinned-user">{chat.user}</span>
              <span class="pinned-time">{chat.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
