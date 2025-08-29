const ToDoApp = () => {
  console.log("ToDoApp is called");
  const [input, setInput] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);
  const [taskCount, setTaskCount] = React.useState(0);

  const task = {
    id: Date.now(),
    text: "Nội dung task",
    completed: false,
  };

  function addTask() {
    if (input.trim() === " ") return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTaskList([...taskList, newTask]); // = setTaskList(taskList.push(newTask))
    console.log(newTask.text);
    setInput(""); // reset
  }

  function taskAsCompleted(id) {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function taskAsDeleted(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    <div className="container border-1-dark d-flex flex-column p-1 gap-2 bg-dark-subtle">
      <div className="input-bar container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Fill new task"
        ></input>
        <button onClick={addTask}>Add new task</button>
      </div>
      <div className="task-list container">
        <ul>
          {taskList.map((task, index) => (
            <li key={index} className="task border-1-dark bg-light">
              <p
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </p>
              <div className="button-group">
                <input
                  type="checkbox"
                  onClick={() => taskAsCompleted(task.id)}
                ></input>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
