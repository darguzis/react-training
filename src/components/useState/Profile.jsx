import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const updateDetails = (event) => {
    event.preventDefault();
    setProfile({ ...profile, name: inputName, age: inputAge });
    setInputName("");
    setInputAge("");
  };

  return (
    <div>
      <h2>Your Profile:</h2>
      <h4>Your name: {profile.name}</h4>
      <h4>Your age: {profile.age}</h4>
      <form onSubmit={updateDetails}>
        <input
          type="text"
          value={inputName}
          onChange={(input) => setInputName(input.target.value)}
          placeholder="Your name"
        />
        <input
          type="number"
          value={inputAge}
          onChange={(input) => setInputAge(input.target.value)}
          placeholder="Your age"
        />
        <button type="submit">Update Details</button>
      </form>
    </div>
  );
};

export default Profile;
