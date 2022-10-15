import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
// import Layout from "./components/Layout";
// import Public from "./components/Public";
// import UserList from "./features/users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    return data;
  };
  console.log(users);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>{users?.length !== 0 ? <Users users={users} /> : "No users"}</>
        }
      />
      {/* <Route path='users'>
          <Route index element={<UserList />} />
        </Route> */}
      <Route path='user/:id' element={<UserDetails />} />
    </Routes>
  );
}

export default App;
