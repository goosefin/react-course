import { useState } from "react";
import AddUser from "./components/AddUser";
import Card from "./components/Card";
import UserList from "./components/UserList";
import Wrapper from "./components/Wrapper";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    console.log(newUser);
    console.log(users);
    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
  };

  return (
    <Wrapper>
      <Card>
        <AddUser handleAddUser={handleAddUser} />
      </Card>

      <Card>{users && <UserList users={users} />}</Card>
    </Wrapper>
  );
}

export default App;
