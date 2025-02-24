import { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function ToDoList(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    const [deadline,setDeadline]=useState(null);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function handleDeadlineChange(date){
        setDeadline(date);
    }
    function addTask(){
        if(newTask.trim()!=="" && deadline!=null){
            setTasks((t)=>{
                return [...t,{name : newTask , deadline}]})
            setNewTask("");
            setDeadline(null);
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
    function updateDeadline(index,date){
        const updatedTasks=tasks.map((task,i)=>
            i===index? {...task,deadline:date} : task
        );
        setTasks(updatedTasks);
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTasks((prevTasks) =>
            prevTasks.map((task) =>
            ({...task,
                isOverdue: new Date() > new Date(task.deadline),
            })
            ));

        }, 1000 );
        return () => clearInterval(interval);
    } , []);
    return(
        <>
            <h1>TO-DO LIST</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <DatePicker
                    selected={deadline}
                    onChange={handleDeadlineChange}
                    showTimeSelect
                    dateFormat="yyyy-MM-dd h:mm aa"
                    placeholderText="Set deadline"
                    className="datepicker-input"
                
                />
                <button
                    onClick={addTask}>
                Add</button>

            </div>
            <div>
                <ol>
                {tasks.map((task, index) => (
    <li 
        key={index}
        style={{
            backgroundColor: task.isOverdue ? "red" : "transparent",
        }}
        >
      <span>{task.name}-Deadline:{task.deadline?.toLocaleString()} </span>
      <DatePicker
        selected={task.deadline}
        onChange={(date)=> updateDeadline(index,date)}
        showTimeSelect
        dateFormat="yyyy-MM-dd h:mm aa"
        className="datepicker-input"
      />
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
 