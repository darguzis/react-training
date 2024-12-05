const Weather = (props) => {
  //   if (props.temperature < 15) {
  //     return <p>It is cold outside</p>;
  //   } else if (props.temperature >= 15 && props.temperature <= 25) {
  //     return <p>It is warm outside</p>;
  //   } else {
  //     return <p>It is hot outside</p>;
  //   }
  const temperatureText =
    props.temperature < 15
      ? "cold"
      : props.temperature >= 15 && props.temperature <= 25
      ? "warm"
      : "hot";
  return <p>It is {temperatureText} outside</p>;
};

export default Weather;
