import { useViewerCount, useMessageCount } from "../hooks/useSimulation";

export function LiveStats() {
  const viewers = useViewerCount();
  const messages = useMessageCount();

  return (
    <div class="card white-card live-stats">
      <div class="stats-header">
        <span class="card-label dark" style="margin-bottom:0">LIVE STATS</span>
        <span class="stats-sublabel">MATCH</span>
      </div>
      <div class="stats-row">
        <div class="stat-item">
          <span class="stat-value">{viewers.toLocaleString()}</span>
          <span class="stat-label-text">viewers</span>
        </div>
        <div class="stat-divider" />
        <div class="stat-item">
          <span class="stat-value">{messages.toLocaleString()}</span>
          <span class="stat-label-text">messages</span>
        </div>
        <div class="stat-divider" />
        <div class="stat-item">
          <span class="stat-value">4</span>
          <span class="stat-label-text">buffs sent</span>
        </div>
      </div>
    </div>
  );
}
