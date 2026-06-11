import React from "react";

function CharacterInput({ text, setText }) {
  return (
    <div id="div1">
      <label>Type something:</label>
      <textarea
        placeholder="Start typing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
      />
    </div>
  );
}

export default CharacterInput;