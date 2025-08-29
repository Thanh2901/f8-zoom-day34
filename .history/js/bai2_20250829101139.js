import React from "react";

const ToDoApp = () => {
  const [task, setTask] = React.useState("");
  const [tasklist, setTaskList] = React.useState();

  return (
    <div className="container border-1-dark d-flex flex-column p-1 gap-2 bg-dark-subtle">
      <div className="input-bar container">
        <input placeholder="Nhap them task moi"></input>
        <button>Add</button>
      </div>
      <div className="task-list container">
        <ul>
          <li className="task border-1-dark bg-light">
            <p>Noi dung task</p>
            <div className="button-group">
              <input type="checkbox"></input>
              <button>Xoa</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
