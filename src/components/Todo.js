export default function Todo({ task, idx, toggleTask }) {
  const { text, completed } = task;
  return !completed ? (
    <div className="todo-container">
      <input
        type="checkbox"
        className="todo-checkbox"
        id={"input-" + idx}
        onClick={() => toggleTask(idx)}
      />
      <p id={"todo-" + idx}> {text}</p>
    </div>
  ) : (
    <div className="todo-container">
      <input
        type="checkbox"
        className="todo-checkbox"
        id={"input-" + idx}
        onClick={() => toggleTask(idx)}
      />
      <p className="disabled" id={"todo-" + idx}>
        {" "}
        {text}
      </p>
    </div>
  );
}
