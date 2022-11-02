import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Effect() {
  const [count, setCount] = useState(0);
  const [isMount, setIsMount] = useState(false);
  const { name } = useContext(UserContext);

  // setIsMount to true when mounting
  useEffect(() => {
    setIsMount(true);
  }, []);

  // timer
  useEffect(() => {
    const interval =
      isMount && setInterval(() => setCount((prev) => prev + 1), 1000);

    return () => {
      clearInterval(interval);
      setCount(0);
    };
  }, [isMount]);

  useEffect(() => console.log(isMount), [isMount]);

  return (
    <>
      <h2>Welcome {name}</h2>
      <h2>Timer</h2>
      {isMount && <div>{count}</div>}
      <button onClick={() => setIsMount((prev) => !prev)}>Toggle mount</button>
    </>
  );
}
