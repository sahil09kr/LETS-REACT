import { useState } from "react";

export default function ToDoList(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks((t)=>{
                return [...t,newTask]})
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <>
            <h1>TO-DO LIST</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    onChange={handleInputChange}
                />
                <button
                    onClick={addTask}>
                Add</button>

            </div>
            <div>
                <ol>
                {tasks.map((task, index) => (
    <li key={index}>
      <span>{task}</span>
      <button onClick={() => deleteTask(index)}>DELETE</button>
      <button onClick={() => moveTaskUp(index)}>UP</button>
      <button onClick={() => moveTaskDown(index)}>DOWN</button>
    </li>
  ))}
                </ol>
            </div>
        </>
    )
}
 