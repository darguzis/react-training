const Greeting1 = (props) => {
  const timeOfDayGreet =
    props.timeOfDay === "morning"
      ? "Good morning"
      : props.timeOfDay === "afternoon"
      ? "Good afternoon"
      : "Good evening";
  return <p>{timeOfDayGreet}</p>;
};

export default Greeting1;
