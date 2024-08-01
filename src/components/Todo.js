import { useState } from "react";

export default function Todo({ task, idx, toggleTask, editTask }) {
  const { text, completed } = task;
  const [editText, setEditText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditInput = (event) => {
    event.preventDefault();
    let newStr = event.target.value;
    setEditText(newStr);
  };
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="todo-container">
      <input
        type="checkbox"
        className="todo-checkbox"
        id={"input-" + idx}
        defaultChecked={completed}
        onClick={() => toggleTask(idx)}
      />
      {!isEditing ? (
        !completed ? (
          <p id={"todo-" + idx} onClick={toggleEdit}>
            {" "}
            {text}
          </p>
        ) : (
          <p className="disabled" id={"todo-" + idx} onClick={toggleEdit}>
            {text}
          </p>
        )
      ) : (
        <input
          value={editText}
          type="text"
          onChange={(event) => handleEditInput(event)}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              editTask(editText, idx);
              setIsEditing(false);
            }
          }}
        />
      )}
    </div>
  );
}
