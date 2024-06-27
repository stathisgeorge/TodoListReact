import TaskForm from './TaskForm';
import './App.css';
import Task from './Task';
import { useState, useEffect } from 'react';

function App() {
  const [tasks,setTasks] = useState([]);
  useEffect(()=>{
    if(tasks.length===0) return;
    localStorage.setItem('tasks',JSON.stringify(tasks));

  }, [tasks]);
  useEffect(()=>{
    const tasks=JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks);
  },[])
  function addTask(name){
    setTasks(prev=>{
      return [...prev, {name:name, done:false}]
    });
  }

function updateTaskDone(taskIndex, newDone){
  setTasks(prev=>{
    const newTasks=[...prev];
    newTasks[taskIndex].done=newDone;
    return newTasks;
  });
}

const numberComplete=tasks.filter(t=>t.done).length;
const totalNumber=tasks.length;

function getMessage(){
  const percentage= (numberComplete/ totalNumber ) *100;
  if(percentage===0){
    return 'Try to do at least one';
  }
  if (percentage===100){
    return 'Nice job for today';
  }
  return 'Keep it going';
}

function removeTask(taskIndexToRemove){
  setTasks(prev=>{
    return prev.filter((taskObject,index)=> index !==taskIndexToRemove);
  });
}

function renameTask(index, newName){
  setTasks(prev=>{
    const newTasks = [...prev];
    newTasks[index].name=newName;
    return [...prev];
  })
}

 return (
   <main>
    <h1>{numberComplete}/{totalNumber} Complete</h1>
    <h2></h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task,index)=>(
        <Task {...task} 
        onRename={newName=>renameTask(index,newName)}
        onTrash={()=>removeTask(index)}
        onToggle={done=>updateTaskDone(index,done)}/>
      ))}
   </main>
  );
}

export default App;
