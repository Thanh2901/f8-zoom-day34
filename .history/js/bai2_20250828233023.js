let uniqId = 0;
function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Lấy giá trị từ input
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang reload khi submit form
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: ++uniqId, text: inputValue, completed: false },
      ]);
      setInputValue(""); // Reset input sau khi thêm
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

roôt;
