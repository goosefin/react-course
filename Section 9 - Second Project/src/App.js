import { useState } from "react";
import AddUser from "./components/AddUser";
import Card from "./components/Card";
import UserList from "./components/UserList";

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
    <div>
      <Card>
        <AddUser handleAddUser={handleAddUser} />
      </Card>

      <Card>{users && <UserList users={users} />}</Card>
    </div>
  );
}

export default App;
