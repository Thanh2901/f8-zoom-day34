const App = () => {
  const [count, setCount] = React.useState(0);

  const getStatus = () => {
    if (count > 0) return "Dương";
    if (count < 0) return "Âm";
    return "Bằng không";
  };

  return (
    <div>
      {/* toan tu 3 ngoi */}
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : "zero"}>
        {count}
      </h1>
      <p>{getStatus()}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
