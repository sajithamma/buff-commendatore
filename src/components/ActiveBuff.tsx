import { useActiveBuff } from "../hooks/useSimulation";

const optionLetters = ["A", "B", "C", "D"];

function BuffStandby() {
  return (
    <div class="card dark-card buff-standby">
      <div class="standby-scanlines" />
      <div class="standby-grid" />
      <div class="standby-content">
        <div class="standby-ring">
          <svg class="standby-ring-svg" viewBox="0 0 100 100">
            <circle class="ring-track" cx="50" cy="50" r="42" />
            <circle class="ring-sweep" cx="50" cy="50" r="42" />
          </svg>
          <div class="standby-icon">⚡</div>
        </div>
        <div class="standby-label">BUFF STANDBY</div>
        <div class="standby-sub">
          <span class="standby-cursor">_</span> Awaiting next deployment
        </div>
        <div class="standby-stats">
          <span class="standby-stat">SYS <span class="standby-val">ONLINE</span></span>
          <span class="standby-stat">LINK <span class="standby-val">ACTIVE</span></span>
        </div>
      </div>
    </div>
  );
}

export function ActiveBuff() {
  const buff = useActiveBuff();

  if (buff.state !== "live") return <BuffStandby />;

  const isUrgent = (buff.timeLeft ?? 99) <= 10;

  return (
    <div class={`card white-card active-buff ${isUrgent ? "buff-urgent" : ""}`}>
      <div class="buff-header">
        <div class="card-label dark">ACTIVE BUFF</div>
        <div class="buff-live-indicator">
          <span class="green-dot pulse-green" />
          <span class="poll-live-label">POLL LIVE</span>
        </div>
      </div>
      <div class="buff-question">{buff.question}</div>
      <div class="buff-options-list">
        {buff.options?.map((opt, i) => (
          <div class="buff-option-row" key={i}>
            <span class="option-badge">{optionLetters[i]}</span>
            <span class="option-name">{opt}</span>
          </div>
        ))}
      </div>
      <div class="buff-footer">
        <div class={`buff-timer-pill ${isUrgent ? "timer-urgent" : ""}`}>
          <span class="timer-value">⏱ {buff.timeLeft}s left</span>
        </div>
        <div class="buff-cta">Tell viewers to vote!</div>
      </div>
    </div>
  );
}
