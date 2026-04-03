import { useTopics, useMessageCount } from "../hooks/useSimulation";

const topicStyles = [
  { textClass: "topic-2-text", countClass: "orange", dot: "orange-dot" },
  { textClass: "topic-3-text", countClass: "yellow", dot: "yellow-dot" },
  { textClass: "topic-4-text", countClass: "gray", dot: null },
  { textClass: "topic-5-text", countClass: "gray", dot: null },
  { textClass: "topic-5-text", countClass: "gray", dot: null },
  { textClass: "topic-5-text", countClass: "gray", dot: null },
];

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
        </div>

        {/* Heat bar + secondary topics grouped at bottom */}
        <div class="topics-bottom">
          <div class="heat-bar-container">
            <div class="heat-bar" />
            <span class="heat-bar-count">{topics[0].messages} messages</span>
          </div>

          {topics.slice(1).map((topic, i) => {
            const style = topicStyles[i] || topicStyles[topicStyles.length - 1];
            return (
              <div class={`topic slide-in`} style={`animation-delay: ${(i + 1) * 0.05}s`} key={i}>
                <span class={style.textClass}>{topic.text}</span>
                <span class={`topic-count ${style.countClass}`}>
                  {style.dot && <span class={`topic-dot ${style.dot}`} />}
                  {topic.messages} messages
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
