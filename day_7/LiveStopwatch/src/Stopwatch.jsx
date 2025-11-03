import { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [active]);

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <h1>{formatTime()}</h1>
      <button onClick={() => setActive(true)}>Start</button>
      <button onClick={() => setActive(false)}>Pause</button>
      <button
        onClick={() => {
          setActive(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
