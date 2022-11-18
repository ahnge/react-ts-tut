import { useState, useEffect, useRef } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<null | number>(null);

  const stopTime = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTime();
    };
  }, []);

  return (
    <div>
      Timer - {timer}
      <button onClick={() => stopTime()}>Stop timer</button>
    </div>
  );
};

export default MutableRef;
