import { useState } from "react";
import "./App.css";
import "./litElements/sample-button";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <span className="count">{count}</span>
      <div className="buttonContainer">
        <sample-button
          actionType="decrement"
          buttonText="decrement"
          onClick={decrement}
        />
        <sample-button
          actionType="increment"
          buttonText="increment"
          onClick={increment}
        />
      </div>
    </div>
  );
}

export default App;
