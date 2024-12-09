import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addToList = (event) => {
    event.preventDefault();
    setTodo([...todo, inputValue]);
    setInputValue("");
  };
  return (
    <div>
      <h3>Your To Do List:</h3>
      {todo.map((td, index) => (
        <li key={index}>{td}</li>
      ))}
      <form onSubmit={addToList}>
        <input
          type="text"
          value={inputValue}
          placeholder="Add to list"
          onChange={(listItem) => setInputValue(listItem.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoList;
