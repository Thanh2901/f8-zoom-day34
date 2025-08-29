import React from "react";

const ToDoApp = () => {
  const [input, setInput] = React.useState("");
  const [tasklist, setTaskList] = React.useState([]);
  const [taskCount, setTaskCount] = React.useState(0);

  const task = {
    id: Date.now(),
    text: "Nội dung task",
    completed: false,
  };

  function addTask() {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTaskList([...tasklist, newTask]);
    setInput(""); // reset
  }

  function taskAsComplete() {}

  return (
    <div className="container border-1-dark d-flex flex-column p-1 gap-2 bg-dark-subtle">
      <div className="input-bar container">
        <input placeholder="Fill new task"></input>
        <button onClick={addTask}>Add new task</button>
      </div>
      <div className="task-list container">
        <ul>
          <li className="task border-1-dark bg-light">
            <p>{task.text}</p>
            <div className="button-group">
              <input type="checkbox"></input>
              <button>Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
