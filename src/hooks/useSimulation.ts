import { useState, useEffect, useRef } from "preact/hooks";
import { topicSets, buffSequence, pinnedChats, tickerMessages, allChats, type Buff, type PinnedChat } from "../data";
import { playChime, playWhoosh, playAlert, playTick } from "../sounds";

export function useMatchTimer() {
  const [minutes, setMinutes] = useState(67);
  const [seconds, setSeconds] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s >= 59) {
          setMinutes((m) => m + 1);
          return 0;
        }
        return s + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function useViewerCount() {
  const [count, setCount] = useState(12847);

  useEffect(() => {
    const tick = () => {
      const delay = 3000 + Math.random() * 2000;
      setTimeout(() => {
        setCount((c) => {
          const change = Math.random() > 0.2
            ? Math.floor(Math.random() * 8) + 1
            : -(Math.floor(Math.random() * 3) + 1);
          return c + change;
        });
        tick();
      }, delay);
    };
    tick();
  }, []);

  return count;
}

export function useTopics() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % topicSets.length);
      setAnimKey((k) => k + 1);
      playChime();
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return { topics: topicSets[index], animKey };
}

export function useActiveBuff() {
  const [buffIndex, setBuffIndex] = useState(0);
  const [currentBuff, setCurrentBuff] = useState<Buff>({ ...buffSequence[0] });
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const alertedRef = useRef(false);

  useEffect(() => {
    const buff = buffSequence[buffIndex % buffSequence.length];
    setCurrentBuff({ ...buff });
    alertedRef.current = false;

    if (buffIndex > 0) {
      playWhoosh();
    }

    if (buff.state === "live" && buff.timeLeft) {
      let timeLeft = buff.timeLeft;
      timerRef.current = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
          if (timerRef.current) clearInterval(timerRef.current);
          setBuffIndex((i) => i + 1);
        } else {
          if (timeLeft === 10 && !alertedRef.current) {
            alertedRef.current = true;
            playAlert();
          }
          setCurrentBuff((b) => ({ ...b, timeLeft }));
        }
      }, 1000);
    } else if (buff.state === "result") {
      const timeout = setTimeout(() => {
        setBuffIndex((i) => i + 1);
      }, 15000);
      return () => clearTimeout(timeout);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [buffIndex]);

  return currentBuff;
}

export function useLastResult() {
  const [result] = useState({
    winner: "Mbappé",
    winnerPct: 67,
    loser: "Bellingham",
    loserPct: 33,
    totalVotes: 6318,
    timeAgo: "3 min ago",
  });

  return result;
}

export function usePinnedChats() {
  const [startIndex, setStartIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((i) => (i + 1) % pinnedChats.length);
      setAnimKey((k) => k + 1);
      playChime();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const visible: PinnedChat[] = [];
  for (let i = 0; i < 3; i++) {
    visible.push(pinnedChats[(startIndex + i) % pinnedChats.length]);
  }

  return { chats: visible, animKey };
}

export function useTickerMessage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % tickerMessages.length);
      playTick();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return tickerMessages[index];
}

export function useAllChats() {
  const [messages, setMessages] = useState(allChats.slice(0, 10));
  const indexRef = useRef(10);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextChat = allChats[indexRef.current % allChats.length];
      indexRef.current++;
      setMessages((prev) => [{ ...nextChat, time: "just now" }, ...prev]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return messages;
}

export function useMessageCount() {
  const [count, setCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return count;
}
