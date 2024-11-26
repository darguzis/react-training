const Greeting = () => {
  const name = "Tadas";
  const currentDate = new Date();
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>{currentDate.toUTCString()}</p>
    </div>
  );
};

export default Greeting;
