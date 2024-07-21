import TaskForm from "./TaskForm";
import Task from "./Task";
export default function DashboardTasks({
  tasks,
  addTask,
  updateTaskDone,
  removeTask,
  renameTask,
  editDescription,
  numberComplete,
  totalNumber,
}) {
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
          <Task
            key={index}
            {...task}
            onRename={(newName) => renameTask(index, newName)}
            onTrash={() => removeTask(index)}
            onToggle={(done) => updateTaskDone(index, done)}
            onEditDescription={(newDescription) =>
              editDescription(index, newDescription)
            }
          />
        ))}
    </main>
  );
}
