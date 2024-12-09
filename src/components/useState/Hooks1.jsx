import { useState } from "react";

const Hooks1 = () => {
  const [count, setCount] = useState(0);
  const styles = {
    backgroundColor: "orange",
    color: "white",
    borderRadius: "10px",
    textAlign: "center",
    padding: "10px",
    width: "50%",
    marginLeft: "25%",
  };
  const buttonStyles = {
    backgroundColor: "white",
    border: "1px solid white",
    borderRadius: "10px",
    padding: "7px",
    margin: "5px",
  };

  return (
    <div style={styles}>
      <h2 style={{ fontSize: "3rem" }}>{count}</h2>
      <button style={buttonStyles} onClick={() => setCount(count + 1)}>
        Add 1
      </button>
      <button style={buttonStyles} onClick={() => setCount(count - 1)}>
        Subtract 1
      </button>
      <button style={buttonStyles} onClick={() => setCount(count * 2)}>
        Multiply by 2
      </button>
      <button style={buttonStyles} onClick={() => setCount(count / 2)}>
        Divide by 2
      </button>
      <button style={buttonStyles} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Hooks1;
