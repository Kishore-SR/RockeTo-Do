const todoKey = "reactTodo";

export const getLocalStorageData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if(!rawTodos) return []; //Initially if no tasks then return empty [] array
    return JSON.parse(rawTodos);
};

export const setLocalStorageData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
};