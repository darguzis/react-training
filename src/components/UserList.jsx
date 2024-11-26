const UserList = () => {
  const users = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Bob Johnson", age: 35 },
  ];

  return (
    <div id="user-list">
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
