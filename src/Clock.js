import { useState, useEffect } from "react";

const Clock = (props) => {
  const [time, setTime] = useState(props.data);
  //const [reset, setReset] = useState(false)

  const handleStart = () => {
    setTime((time) => time + 10);
  };

  const handleReset = (value) => {
    setTime(value);
    //setReset(true)
  };

  return (
    <>
      <span>{time}</span>
      <br />
      <button onClick={(e) => handleStart()}>Start</button>
      <button onClick={() => handleReset(50)}>Reset</button>
    </>
  );
};
export default Clock;
