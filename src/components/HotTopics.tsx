import { useTopics, useMessageCount } from "../hooks/useSimulation";

export function HotTopics() {
  const { topics, animKey } = useTopics();
  const messageCount = useMessageCount();

  return (
    <div class="card dark-card hot-topics">
      <div class="hot-topics-header">
        <div>
          <div class="card-label">HOT TOPICS</div>
          <div class="card-sublabel hot-topics-sublabel">🔥 WHAT FANS ARE SAYING</div>
        </div>
        <div class="hot-topics-meta">From {messageCount.toLocaleString()} messages in last 5 min</div>
      </div>

      <div class="topics-list" key={animKey}>
        {/* Topic 1 — Hero */}
        <div class="topic topic-1 slide-in">
          <div class="topic-1-text">{topics[0].text}</div>
          <div class="heat-bar-container">
            <div class="heat-bar" />
            <span class="heat-bar-count">{topics[0].messages} messages</span>
          </div>
        </div>

        {/* Topic 2 */}
        <div class="topic topic-2 slide-in" style="animation-delay: 0.05s">
          <span class="topic-2-text">{topics[1].text}</span>
          <span class="topic-count orange">
            <span class="topic-dot orange-dot" />
            {topics[1].messages} messages
          </span>
        </div>

        {/* Topic 3 */}
        <div class="topic topic-3 slide-in" style="animation-delay: 0.1s">
          <span class="topic-3-text">{topics[2].text}</span>
          <span class="topic-count yellow">
            <span class="topic-dot yellow-dot" />
            {topics[2].messages} messages
          </span>
        </div>

        {/* Topic 4 */}
        <div class="topic topic-4 slide-in" style="animation-delay: 0.15s">
          <span class="topic-4-text">{topics[3].text}</span>
          <span class="topic-count gray">{topics[3].messages} messages</span>
        </div>
      </div>
    </div>
  );
}
