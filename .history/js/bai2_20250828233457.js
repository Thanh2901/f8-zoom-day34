const TodoApp = () => {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            {t.text}
            <button
              className="complete-btn"
              onClick={() => toggleComplete(index)}
            >
              ✓
            </button>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoApp />);
