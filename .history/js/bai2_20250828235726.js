const ToDoApp = () => {
  return (
    <>
      <div className="input-bar">
        <input placeholder="Nhap them task moi"></input>
        <button>Add</button>
      </div>
      <div className="task-list"></div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
