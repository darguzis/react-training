import { useState } from "react";
const ModifyObject = () => {
  const [movie, setMovie] = useState({
    title: "Jumanji: Welcome to the Jungle",
    imdb: 6.9,
  });

  return (
    <div>
      <h2>{movie.title}</h2>
      <h3>{movie.imdb}</h3>
    </div>
  );
};

export default ModifyObject;
