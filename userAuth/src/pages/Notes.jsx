import { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState(["First Note", "React nerchukundam"]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Notes</h2>
      <div style={{ marginBottom: "20px" }}>
        <input 
          type="text" 
          placeholder="New note type chey" 
          value={newNote} 
          onChange={(e) => setNewNote(e.target.value)} 
        />
        <button onClick={addNote}> Add</button>
      </div>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map((note, index) => (
          <li key={index} style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
            {note}
            <button onClick={() => deleteNote(index)} style={{ marginLeft: "10px" }}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;