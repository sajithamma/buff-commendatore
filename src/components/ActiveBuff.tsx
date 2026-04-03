import { useActiveBuff } from "../hooks/useSimulation";

const optionLetters = ["A", "B", "C", "D"];

export function ActiveBuff() {
  const buff = useActiveBuff();

  if (buff.state !== "live") return null;

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
