import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter Component</h1>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
