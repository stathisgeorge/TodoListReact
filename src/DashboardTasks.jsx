import TaskForm from "./Task/TaskForm";
import Task from "./Task/Task";
import { useState, useEffect } from "react";
export default function DashboardTasks({}) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks || tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  function addTask(name, description) {
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

  return (
    <main>
      <h1
        className={
          numberComplete === totalNumber ? "completedTasks" : "pendingTasks"
        }
      >
        {numberComplete}/{totalNumber} Complete
      </h1>
      <div>
        <TaskForm onAdd={addTask} />
      </div>
      {tasks &&
        tasks.map((task, index) => (
          <Task key={index} {...task} onTrash={() => removeTask(index)}
          onToggle={(done) => updateTaskDone(index, done)} />
        ))}
    </main>
  );
}
