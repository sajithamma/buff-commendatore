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
import { AuroraBackground } from "./components/AuroraBackground";
import "./style.css";

function App() {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <>
      <div class="mobile-block">
        <div class="mobile-block-icon">🖥️</div>
        <div class="mobile-block-title">Use iPad or Desktop</div>
        <div class="mobile-block-sub">This commentator dashboard is designed for landscape screens. Please open on an iPad or desktop browser.</div>
      </div>
      <div class="app">
        <AuroraBackground />
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
    </>
  );
}

render(<App />, document.getElementById("app")!);
