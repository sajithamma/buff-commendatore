import { Ticker } from "./Ticker";

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomBar({ activeTab, onTabChange }: Props) {
  const tabs = [
    { id: "live", label: "Live View" },
    { id: "chats", label: "All Chats" },
    { id: "votes", label: "Vote Progress" },
  ];

  return (
    <div class="bottom-bar">
      <div class="bottom-bar-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            class={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span class={`tab-dot ${activeTab === tab.id ? "blue-dot" : "gray-dot"}`} />
            {tab.label}
          </button>
        ))}
      </div>
      <Ticker />
    </div>
  );
}
