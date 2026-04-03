import { useViewerCount, useMessageCount } from "../hooks/useSimulation";

export function LiveStats() {
  const viewers = useViewerCount();
  const messages = useMessageCount();

  return (
    <div class="card white-card live-stats">
      <div class="card-label dark">LIVE STATS</div>
      <div class="stats-sublabel">MATCH</div>
      <div class="stat-row stat-viewers">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px; flex-shrink: 0;">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#000"/>
        </svg>
        {viewers.toLocaleString()} viewers
      </div>
      <div class="stat-row stat-messages">
        <span style="margin-right: 8px">💬</span>
        {messages.toLocaleString()} messages
      </div>
      <div class="stat-row stat-buffs">
        <span style="margin-right: 8px">📦</span>
        4/12 buffs sent
      </div>
    </div>
  );
}
