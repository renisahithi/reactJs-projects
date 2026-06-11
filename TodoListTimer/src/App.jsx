import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  return (
    <div className="app">
      <h1>Todo List with Timer</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <Todo key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
