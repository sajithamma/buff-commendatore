import { useState, useEffect } from "preact/hooks";
import { useActiveBuff } from "../hooks/useSimulation";

export function VoteProgressView() {
  const buff = useActiveBuff();
  const [votes, setVotes] = useState<number[]>([]);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    if (buff.state === "live" && buff.options) {
      setVotes(buff.options.map(() => Math.floor(Math.random() * 500) + 100));
    } else if (buff.state === "result") {
      setVotes([buff.winnerPct ?? 0, buff.loserPct ?? 0]);
    }
  }, [buff.question]);

  useEffect(() => {
    if (buff.state !== "live" || !buff.options) return;
    const interval = setInterval(() => {
      setVotes((prev) =>
        prev.map((v) => v + Math.floor(Math.random() * 20) + 1)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [buff.question, buff.state]);

  useEffect(() => {
    setTotalVotes(votes.reduce((a, b) => a + b, 0));
  }, [votes]);

  const options = buff.state === "live"
    ? buff.options ?? []
    : [buff.winner ?? "", buff.loser ?? ""];

  return (
    <div class="vote-progress-view">
      <div class="vote-status">
        {buff.state === "live" ? (
          <><span class="green-dot" /> <span class="poll-live-label">POLL LIVE</span></>
        ) : (
          <span class="result-label">FINAL RESULT</span>
        )}
      </div>
      <div class="vote-question">{buff.question}</div>
      <div class="vote-bars">
        {options.map((opt, i) => {
          const pct = totalVotes > 0 ? Math.round((votes[i] / totalVotes) * 100) : 0;
          return (
            <div class="vote-bar-row" key={i}>
              <div class="vote-bar-label">
                <span>{opt}</span>
                <span class="vote-bar-pct">{pct}%</span>
              </div>
              <div class="vote-bar-track">
                <div
                  class="vote-bar-fill"
                  style={`width: ${pct}%; transition: width 0.5s ease`}
                />
              </div>
              <div class="vote-bar-count">{votes[i]?.toLocaleString()} votes</div>
            </div>
          );
        })}
      </div>
      <div class="vote-total">{totalVotes.toLocaleString()} total votes</div>
      {buff.state === "live" && buff.timeLeft && (
        <div class="vote-timer">⏱ {buff.timeLeft}s remaining</div>
      )}
    </div>
  );
}
