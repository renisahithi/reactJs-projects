import React from "react";

function CharacterStats({ text, setText }) {
  const count = text.length;

  return (
    <div>
      <button className="count-btn">Character Count: {count}</button>
      <br /><br />
      <button className="clear-btn" onClick={() => setText("")}>Clear</button>
    </div>
  );
}

export default CharacterStats;