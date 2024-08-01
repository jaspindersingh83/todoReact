import { useState } from "react";
import Todo from "./Todo";
import "./style.css";

export default function TodoList() {
  let [newTask, setnewTask] = useState("");
  const [todoArr, settodoArr] = useState([]);

  const handleInput = (event) => {
    event.preventDefault();
    let newStr = event.target.value;
    setnewTask(newStr);
  };
  const addTask = () => {
    let newArr = [...todoArr];
    newArr.push({ text: newTask, completed: false });
    settodoArr(newArr);
    setnewTask("");
  };
  const toggleTask = (idx) => {
    todoArr[idx].completed = !todoArr[idx].completed;
    let newArr = [...todoArr];
    settodoArr(newArr);
  };

  const editTask = () => {};

  const deleteAllTasks = () => {};
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
            <Todo task={task} key={idx} idx={idx} toggleTask={toggleTask} />
          ))}
        </li>
      </ul>
      <div className="counter-container">
        <p>
          <span id="todocount">{todoArr.length}</span>
          <>Items Total </>
        </p>
      </div>
    </div>
  );
}
