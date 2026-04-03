import { render } from "preact";
import { useState, useEffect } from "preact/hooks";
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
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("buff-theme") as "dark" | "light") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("buff-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <div class="mobile-block">
        <div class="mobile-block-icon">🖥️</div>
        <div class="mobile-block-title">Use iPad or Desktop</div>
        <div class="mobile-block-sub">This commentator dashboard is designed for landscape screens. Please open on an iPad or desktop browser.</div>
      </div>
      <div class="app">
        <AuroraBackground theme={theme} />
        <TopBar theme={theme} onToggleTheme={toggleTheme} />
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
