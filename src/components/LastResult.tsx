import { useLastResult } from "../hooks/useSimulation";

export function LastResult() {
  const result = useLastResult();

  return (
    <div class="card dark-card last-result">
      <div class="card-label">LAST RESULT</div>
      <div class="result-label">RESULT</div>
      <div class="result-winner">
        {result.winner}  {result.winnerPct}%
      </div>
      <div class="result-bar-track">
        <div class="result-bar-fill" style={`width: ${result.winnerPct}%`} />
      </div>
      <div class="result-runner-up">
        <span class="runner-up-name">{result.loser}</span>
        <span class="runner-up-pct">{result.loserPct}%</span>
      </div>
      <div class="result-bar-track runner-up-bar">
        <div class="result-bar-fill runner-up-fill" style={`width: ${result.loserPct}%`} />
      </div>
      <div class="result-meta">
        {result.totalVotes.toLocaleString()} votes · {result.timeAgo}
      </div>
    </div>
  );
}
