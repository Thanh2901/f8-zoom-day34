const ToDoApp = () => {
  return (
    <>
      <div className="input-bar">
        <input placeholder="Nhap them task moi"></input>
        <button>Add</button>
      </div>
      <div className="task-list">
        <ul>
          <li
            className="task 
.border-1rem-dark"
          >
            <p className="border-1">Noi dung task</p>
            <input type="checkbox"></input>
            <button>Xoa</button>
          </li>
        </ul>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
