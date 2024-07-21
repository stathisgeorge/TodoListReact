import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  const [errors, setError] = useState([]);
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const error = validate();
    setError(error);
    if (errors && taskName) {
      console.log('error',errors);
      onAdd(taskName, description);
      setTaskName("");
      setDescription("");
    }
  }

  const validate = () => {
    const error = {};
    if (!taskName) {
      error.name = "Name is required";
    } else {
      error.name = "";
    }
    return error;
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
 
          <div className="InputTask">
            <input
              label="name"
              type="text"
              placeholder="Fill the name of the task"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="InputTask">
            <input
              label="description"
              type="text"
              placeholder="Fill the description of the task(optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        
          <button type="submit" className="button">
          <div className="button-top"><span>+</span>Add Task</div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
        
     
    </form>
  );
}
