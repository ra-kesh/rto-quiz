import { useEffect, useState } from "react";

export const Timer = ({ setTimeOff, questionNumber }: any) => {
  const [timer, setTimer] = useState<number>(15);

  useEffect(() => {
    if (timer === 0) return setTimeOff(true);

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setTimeOff, timer]);

  useEffect(() => {
    setTimer(15);
  }, [questionNumber]);
  return <div>{timer}</div>;
};
