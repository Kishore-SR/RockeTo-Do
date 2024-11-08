import { useState } from "react";
import "./TodoForm.css";

export const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState({});
  const handleInputChange=(value)=>{
    setInputValue({id:value, content:value, checked: false});
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue)

    setInputValue({id:'', content:'', checked: false});  
}
  return (
    <section className="todo-form-container">
      <form onSubmit={handleFormSubmit} className="todo-form">
        <div className="form-input-wrapper">
          <input
            type="text"
            className="todo-input"
            placeholder="Launch your tasks here..."
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
          <button type="submit" className="add-task-button">
          Add Task  <i className="fas fa-rocket" style={{ marginLeft: '8px' }}></i>
          </button>
        </div>
      </form>
    </section>
  );
};
