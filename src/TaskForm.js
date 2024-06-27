import {useState} from "react";

export default function TaskForm({onAdd}){
    const[taskName, setTaskName]=useState('')
    function handleSubmit(e){
        e.preventDefault();
        onAdd(taskName);
    }
    return (
        <form onSubmit={handleSubmit}>
            <button>+</button>
            <input type="text" required
            placeholder="Fill the name of the task"
            errorMe
            onChange={e=>setTaskName(e.target.value)}
            />
        </form>
    );
}