import "./styles.css";
import { useEffect, useState } from "react";

export default function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState();
  const [pause, setPause] = useState();
  const [reset, setReset] = useState(0);

  const startTimer = () => {
    setReset(
      setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000)
    );
  };
  const pauseTimer = () => {
    clearInterval(reset); // wrong
  };

  const resetTimer = () => {
    // setReset(setInterval(reset,1000))
    clearInterval(reset);
    setSeconds(0);
  };

  //start - timer shud start
  //pause - timer shud pause
  //reset- timer shud reset

  return (
    <div className="App">
      <div>{seconds}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
