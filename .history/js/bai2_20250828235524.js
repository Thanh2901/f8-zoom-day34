const ToDoApp = () => {
  return (
    <>
      <input placeholder="Nhap them task moi"></input>
      <button>Them</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
