import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!taskName.trim()) {
      setError("Name is required");
      return;
    }
    setError("");
    onAdd(taskName,description);
    setTaskName('');
    setDescription('');
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="container">
    <div className="FormAndButton">
    <div className="InputTask">
      <input
        label="name"
        type="text"
        required
        placeholder="Fill the name of the task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
    </div>
    <div className="InputTask">
      <input
      label="description"
        type="text"
        placeholder="Fill the description of the task(optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {error && <div className="error-message">{error}</div>}
     
    </div>
    <button className="AddTaskButton">+</button>
    </div>
    </div>
  </form>
  );
}
