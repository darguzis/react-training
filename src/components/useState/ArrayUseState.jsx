import { useState } from "react";
const ArrayUseState = () => {
  const [things, setThings] = useState(["thing1", "thing2", "thing3"]);

  const addThing = () => {
    setThings([...things, `thing${things.length + 1}`]);
  };
  console.log(things);
  return (
    <div>
      {things.map((thing) => (
        <li key={Math.random()}>{thing}</li>
      ))}
      <button onClick={addThing}>Add thing</button>
    </div>
  );
};

export default ArrayUseState;
