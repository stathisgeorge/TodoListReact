import TaskForm from "./TaskForm";
import "./App.css";
import Task from "./Task";
import { useState, useEffect } from "react";
import DashboardTasks from "./DashboardTasks";
// import { RiTodoLine } from "react-icons/ri";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (!tasks || tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);
  function addTask(name, description) {
    console.log("description", description);
    setTasks((prev) => {
      if (!prev) prev = [];
      return [...prev, { name: name, description: description, done: false }];
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks ? tasks.filter((t) => t.done).length : 0;
  const totalNumber = tasks ? tasks.length : 0;
  if (tasks) {
    tasks.sort((a, b) => {
      return a.done - b.done;
    });
  }

  function removeTask(taskIndexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== taskIndexToRemove);
    });
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return [...prev];
    });
  }

  function editDescription(index, newDescription) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].description = newDescription;
      return [...prev];
    });
  }

  return (
    <>
      <main>
        <h1>Todo List</h1>
        <Router>
          <Routes>
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/DashboardTasks"
              element={
                <DashboardTasks
                  tasks={tasks}
                  addTask={addTask}
                  updateTaskDone={updateTaskDone}
                  removeTask={removeTask}
                  renameTask={renameTask}
                  editDescription={editDescription}
                  numberComplete={numberComplete}
                  totalNumber={totalNumber}
                />
              }
            />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
