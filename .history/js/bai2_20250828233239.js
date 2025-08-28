let uniqId = 0;
function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: ++uniqId, text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Nhập task mới..."
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
