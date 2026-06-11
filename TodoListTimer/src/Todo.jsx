import React, { useState, useEffect } from "react";

function Todo({ task }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1); // ⏳ count up from 0
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <li>
      <span>{task.text}</span>
      <span> {seconds}s</span>
    </li>
  );
}

export default Todo;
