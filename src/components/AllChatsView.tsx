import { useAllChats } from "../hooks/useSimulation";

export function AllChatsView() {
  const messages = useAllChats();

  return (
    <div class="all-chats-view">
      <div class="chats-list">
        {messages.map((msg, i) => (
          <div class="chat-row" key={i} style={i === 0 ? "animation: slideIn 0.3s ease-out" : ""}>
            <span class="chat-user">{msg.user}</span>
            <span class="chat-text">{msg.text}</span>
            <span class="chat-time">{msg.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
