const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user, i) => (
        <li key={i}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UserList;
