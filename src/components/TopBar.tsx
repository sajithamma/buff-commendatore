import { useMatchTimer, useViewerCount } from "../hooks/useSimulation";

export function TopBar() {
  const matchTime = useMatchTimer();
  const viewers = useViewerCount();

  return (
    <div class="top-bar">
      <div class="top-bar-left">
        <span class="live-dot" />
        <span class="live-badge">LIVE</span>
        <span class="top-bar-label">JIL Commentator</span>
      </div>
      <div class="top-bar-center">
        PSG vs Real Madrid · {matchTime}
      </div>
      <div class="top-bar-right">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#ff9500"/>
        </svg>
        <span class="viewer-count">{viewers.toLocaleString()}</span>
      </div>
    </div>
  );
}
