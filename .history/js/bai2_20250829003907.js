const ToDoApp = () => {
  return (
    <>
      <div className="input-bar">
        <input placeholder="Nhap them task moi"></input>
        <button>Add</button>
      </div>
      <div className="task-list">
        <ul>
          <li className="task">
            <p>Noi dung task</p>
            <button>Xoa</button>
            <input type="checkbox"></input>
          </li>
        </ul>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
