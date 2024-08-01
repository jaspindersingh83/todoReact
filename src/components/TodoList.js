//Sequence
// map tasks
// if task completed then strike through
// add task
// focus on edit task in end

import { useState, useEffect } from "react";
import Todo from "./Todo";
import "./style.css";

export default function TodoList() {
  let [newTask, setnewTask] = useState("");
  const [todoArr, settodoArr] = useState(() => {
    const intialVal = JSON.parse(localStorage.getItem("todoArr"));
    return intialVal || [];
  });

  useEffect(() => {
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
  }, [todoArr]);

  const handleInput = (event) => {
    event.preventDefault();
    let newStr = event.target.value;
    setnewTask(newStr);
  };
  const addTask = () => {
    let newArr = [...todoArr];
    if (newTask.length == 0) return;
    newArr.push({ text: newTask, completed: false });
    settodoArr(newArr);
    setnewTask("");
  };
  const toggleTask = (idx) => {
    todoArr[idx].completed = !todoArr[idx].completed;
    let newArr = [...todoArr];
    settodoArr(newArr);
  };

  const editTask = (newText, idx) => {
    todoArr[idx].text = newText;
    let newArr = [...todoArr];
    settodoArr(newArr);
  };
  const deleteAllTasks = () => {
    settodoArr([]);
  };
  return (
    <div className="todo">
      <h2> To Do List </h2>
      <div className="input">
        <input
          type="text"
          className="add-task"
          onChange={handleInput}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              addTask();
            }
          }}
          placeholder="Add Task Here"
          value={newTask}
        />
        <button className="btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="scroll">
        <li id="todo-list">
          {todoArr.map((task, idx) => (
            <Todo
              task={task}
              key={idx}
              idx={idx}
              toggleTask={toggleTask}
              editTask={editTask}
            />
          ))}
        </li>
      </ul>
      <hr className="counter"></hr>
      <div className="counter-container">
        <p>
          <span id="todocount">{todoArr.length + " Items Total"}</span>
        </p>
        <button id="delete-button" onClick={deleteAllTasks}>
          Delete All
        </button>
      </div>
    </div>
  );
}
