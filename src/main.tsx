import { render } from "preact";
import { useState } from "preact/hooks";
import { TopBar } from "./components/TopBar";
import { HotTopics } from "./components/HotTopics";
import { PinnedChats } from "./components/PinnedChats";
import { ActiveBuff } from "./components/ActiveBuff";
import { LastResult } from "./components/LastResult";
import { LiveStats } from "./components/LiveStats";
import { BottomBar } from "./components/BottomBar";
import { AllChatsView } from "./components/AllChatsView";
import { VoteProgressView } from "./components/VoteProgressView";
import "./style.css";

function App() {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <div class="app">
      <TopBar />
      <div class="main-content">
        {activeTab === "live" && (
          <div class="dashboard-grid">
            <div class="left-column">
              <HotTopics />
              <PinnedChats />
            </div>
            <div class="right-column">
              <ActiveBuff />
              <LastResult />
              <LiveStats />
            </div>
          </div>
        )}
        {activeTab === "chats" && <AllChatsView />}
        {activeTab === "votes" && <VoteProgressView />}
      </div>
      <BottomBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

render(<App />, document.getElementById("app")!);
