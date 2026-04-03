import { useActiveBuff } from "../hooks/useSimulation";

const optionLetters = ["A", "B", "C", "D"];

export function ActiveBuff() {
  const buff = useActiveBuff();

  if (buff.state !== "live") return null;

  return (
    <div class="card white-card active-buff">
      <div class="card-label dark">ACTIVE BUFF</div>
      <div class="buff-live-indicator">
        <span class="green-dot" />
        <span class="poll-live-label">POLL LIVE</span>
      </div>
      <div class="buff-question">{buff.question}</div>
      <div class="buff-options">
        {buff.options?.map((opt, i) => (
          <span class="buff-option" key={i}>
            <span class="option-letter">{optionLetters[i]}</span> {opt}
            {i < (buff.options?.length ?? 0) - 1 && <span class="option-sep"> · </span>}
          </span>
        ))}
      </div>
      <div class="buff-timer">
        <span class="timer-icon">⏱</span>
        <span class="timer-value">{buff.timeLeft}s left</span>
      </div>
      <div class="buff-cta">Tell viewers to vote!</div>
    </div>
  );
}
