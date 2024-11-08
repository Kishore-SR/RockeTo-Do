import { useState } from "react";
import "./Todo.css";
import logo from '../assets/rocketo-do-logo.png';
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { DateTime } from "./DataTime";
import { getLocalStorageData, setLocalStorageData } from "./LocalStorage";
import KSRText from "./KSRText";

export const Todo = () => {

    const [task, setTask] = useState(() => getLocalStorageData());

    const handleFormSubmit = (inputValue) => {
      const {id, content, checked} = inputValue;

      //To check if the input field is empty or not
        if(!content) return;

      //To check if the data is already existing or not
      const ifTodoMatched = task.find((currTask) => currTask.content === content)
      if(ifTodoMatched) return;
          
      setTask((prevTask) => [...prevTask, {id,content, checked}]);
    }

    //Function to delete the Tasks
    const handleDeleteTask= (value) => {
      //Storing the updated Tasks list in new array
      const updatedArray = task.filter((currTask)=>currTask.content !== value);

      setTask(updatedArray);
    }

    // Function to 'clear all' tasks 
    const clearAllTasks = () => {
      setTask([]);
    }

    // Function to mark the task as 'checked' and 'uncheck' 
    const handleCheckedTask = (content) => {
       const updatedTasks = task.map((currTask) => {
        if(currTask.content === content)
        {
          return {...currTask, checked:!currTask.checked};
        }
        else{
          return currTask;
        }
       });
       setTask(updatedTasks);
    };

    // Function to add tasks into Local Storage 
    setLocalStorageData(task);

  return (
<section className="todo-container">
      <header className="todo-header">
      <h1 className="todo-title">
        <img src={logo} alt="Rocketo-do Logo" className="logo" />
        Rocketo-do
      </h1>
        <DateTime />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="todo-list-section">
        <ul className="todo-list">
          {task.map((currTask) => (
            <TodoList
              key={currTask.id}
              data={currTask.content}
              onHandleDeleteTodo={handleDeleteTask}
              onHandleCheckedTodo={handleCheckedTask}
              checked={currTask.checked}
            />
          ))}
        </ul>
      </section>

      {task.length > 1 && (
        <div className="todo-clear-all">
          <button onClick={clearAllTasks} className="clear-all-button">
            CLEAR ALL
          </button>
        </div>
      )}

      <KSRText/>
    </section>
  );
};
