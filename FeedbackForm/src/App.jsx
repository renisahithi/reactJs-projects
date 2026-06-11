import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbacks, setFeedbacks] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || feedback.trim() === "") {
      alert("Please fill both Name and Feedback fields!");
      return;
    }
    const newFeedback = { 
      id: Date.now(), 
      name: name, 
      feedback: feedback 
    };
    setFeedbacks([...feedbacks, newFeedback]);
    setName("");
    setFeedback("");
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Feedback Collector</h1>
        
        <form  id="form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label id="label1">Feedback:</label>
          <textarea
            placeholder="Your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
          />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {feedbacks.length > 0 && (
          <div className="feedback-list">
            <h2>Submitted Feedbacks</h2>
            {feedbacks.map((item) => (
              <div key={item.id} className="feedback-item">
                <strong>{item.name}:</strong>
                <p>{item.feedback}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;