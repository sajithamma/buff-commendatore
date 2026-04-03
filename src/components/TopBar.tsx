import { useMatchTimer, useViewerCount } from "../hooks/useSimulation";

interface Props {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

function PSGBadge() {
  return (
    <svg width="28" height="28" viewBox="0 0 100 100" class="team-badge">
      <circle cx="50" cy="50" r="48" fill="#004170" stroke="#e30613" stroke-width="4" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#fff" stroke-width="1.5" />
      <path d="M50 20 L44 55 L36 70 L64 70 L56 55 Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" />
      <line x1="42" y1="48" x2="58" y2="48" stroke="#fff" stroke-width="1.5" />
      <line x1="40" y1="58" x2="60" y2="58" stroke="#fff" stroke-width="1.5" />
      <circle cx="30" cy="44" r="3" fill="#e30613" />
      <circle cx="70" cy="44" r="3" fill="#e30613" />
      <text x="50" y="88" text-anchor="middle" fill="#fff" font-size="11" font-weight="700" font-family="sans-serif">PSG</text>
    </svg>
  );
}

function RealMadridBadge() {
  return (
    <svg width="28" height="28" viewBox="0 0 100 100" class="team-badge">
      <path d="M15 25 L15 65 Q15 90 50 95 Q85 90 85 65 L85 25 Z" fill="#fff" stroke="#d4a843" stroke-width="3" />
      <clipPath id="shield">
        <path d="M15 25 L15 65 Q15 90 50 95 Q85 90 85 65 L85 25 Z" />
      </clipPath>
      <rect x="35" y="20" width="18" height="80" fill="#5a2d82" opacity="0.3" clip-path="url(#shield)" transform="rotate(-8 50 50)" />
      <path d="M30 30 L35 22 L42 28 L50 18 L58 28 L65 22 L70 30 Z" fill="#d4a843" stroke="#b8860b" stroke-width="1" />
      <circle cx="50" cy="22" r="2" fill="#fff" />
      <circle cx="38" cy="26" r="1.5" fill="#fff" />
      <circle cx="62" cy="26" r="1.5" fill="#fff" />
      <text x="50" y="68" text-anchor="middle" fill="#d4a843" font-size="16" font-weight="800" font-family="serif">RM</text>
    </svg>
  );
}

export function TopBar({ theme, onToggleTheme }: Props) {
  const matchTime = useMatchTimer();
  const viewers = useViewerCount();

  return (
    <div class="top-bar">
      <div class="top-bar-left">
        <span class="live-dot" />
        <span class="live-badge">LIVE</span>
        <img src="/jil.png" alt="JIL" class="jil-logo" />
        <span class="top-bar-label">Commentator</span>
        <button class="theme-toggle" onClick={onToggleTheme} title="Toggle theme">
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          )}
        </button>
      </div>
      <div class="top-bar-center">
        <PSGBadge />
        <span class="match-info">PSG vs Real Madrid</span>
        <RealMadridBadge />
        <span class="match-time">· {matchTime}</span>
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
