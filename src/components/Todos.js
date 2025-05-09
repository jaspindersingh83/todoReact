import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import "./style.css";

const Todos = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        return savedTodos || [];
    });
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTask = () => {
        if (!newTodo.trim()) return;
        const newTodos = [...todos, { text: newTodo.trim(), completed: false }];
        setTodos(newTodos);
        setNewTodo("");
    };

    const editTask = (idx, newText) => {
        const newTodos = [...todos];
        newTodos[idx].text = newText.trim();
        setTodos(newTodos);
    };    
    
    const deleteAll = () => {
        setTodos([]);
    };

    const toggleTask = (idx) => {
        const newTodos = [...todos];
        newTodos[idx].completed = !newTodos[idx].completed;
        setTodos(newTodos);
    };

    const handleClick = (e) => {
        if (e.key === "Enter") {
            addTask();
        }else{
            e.preventDefault();
        setNewTodo(e.target.value);
        }
    };

    return (
        <div className="todo">
            <h3>To Do List</h3>
            <div className="input_container">
                <input className="input_field" value={newTodo} onChange={handleClick} onKeyUp={handleClick} placeholder="Add a Task Here" />
                <button className="btn" onClick={addTask}> Add </button>
            </div>
            <div className="task-list-wrapper">
                <ul className="scroll">
                    {todos.map((todo, idx) => (
                        <Todo key={idx} idx={idx} text={todo.text} completed={todo.completed} toggleTask={toggleTask} editTask={editTask} />
                    ))}
                </ul>
            </div>
            <div style={{width: '90%'}}>
                <hr className="counter" />
                <div className="counter_container">
                    <p> Items Total - <span className="counter"> {todos.length} </span> </p>
                    <button className="delete_btn" onClick={deleteAll}> Delete All </button>
                </div>
            </div>
        </div>
    );
};

export default Todos;