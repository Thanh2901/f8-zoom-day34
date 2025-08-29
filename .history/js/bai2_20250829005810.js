const ToDoApp = () => {
  return (
    <div className="container">
      <div className="input-bar container">
        <input placeholder="Nhap them task moi"></input>
        <button>Add</button>
      </div>
      <div className="task-list">
        <ul>
          <li className="task border-1-dark">
            <p>Noi dung task</p>
            <div className="button-group">
              <input type="checkbox"></input>
              <button>Xoa</button>
            </div>
          </li>
        </ul>
      </div>
    <div/>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
