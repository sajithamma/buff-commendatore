import { useTickerMessage } from "../hooks/useSimulation";

export function Ticker() {
  const message = useTickerMessage();

  return (
    <div class="ticker-container">
      <div class="ticker-content" key={message}>
        <span class="ticker-icon">💬</span> {message}
      </div>
    </div>
  );
}
