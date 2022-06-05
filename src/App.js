import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const alertCount = () => {
    alert(count); 
  };
  return (
    <div className="App">
      <header>
        <h1>Counter App using State/Hooks</h1>
      </header>
      <h2>
        Current value of count is <span id="counter">{count}</span>
      </h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => (count > 10 ? 0 : setCount(count + 1))}>
        Increase Counter
      </button>
      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>
        Decrease Counter
      </button>
      <button onClick={alertCount}>alert Count</button>
    </div>
  );
};

export default App;
