import { useState } from "react";
import AddUser from "./components/AddUser";
import Card from "./components/Card";
import UserList from "./components/UserList";
import Wrapper from "./components/Wrapper";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
  };

  return (
    <Wrapper>
      <AddUser handleAddUser={handleAddUser} />
      <UserList users={users} />
    </Wrapper>
  );
}

export default App;
