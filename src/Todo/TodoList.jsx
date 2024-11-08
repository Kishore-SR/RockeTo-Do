import { useState, useEffect } from 'react';
import "./TodoList.css";
import rocketImage from '../assets/rocket.webp';

export const TodoList = ({ data, checked, onHandleDeleteTodo, onHandleCheckedTodo }) => {
const [showRocket, setShowRocket] = useState(false);

useEffect(() => {
if (checked) {
setShowRocket(true);
const timer = setTimeout(() => setShowRocket(false), 2000); // Hide rocket after 2 seconds
return () => clearTimeout(timer);
}
}, [checked]);

return (
<li className={`todo-item ${checked ? 'task-done' : ''}`}>
<span className={checked ? "task checked" : "task notChecked"}>{data}</span>
<div className="todo-actions">
<button className="todo-btn done-btn" onClick={() => onHandleCheckedTodo(data)}>
{!checked ? <i className="fa fa-check"></i> : <i className="fa fa-undo"></i>}
</button>
<button className="todo-btn delete-btn" onClick={() => onHandleDeleteTodo(data)}>
<i className="fa fa-trash"></i>
</button>
</div>
{showRocket && <img src={rocketImage} alt="Rocket" className="rocket-launch" />}
</li>
);
}