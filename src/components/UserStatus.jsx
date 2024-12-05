const UserStatus = (props) => {
  const user = props.loggedIn && props.isAdmin ? "Admin" : "User";
  return <p>Welcome {user}!</p>;
};

export default UserStatus;
