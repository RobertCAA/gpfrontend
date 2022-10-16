import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState([]);

  // Loads users from server. It mounts one time.
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

  //  // Fetch single user
  //  const fetchUser = async (id) => {
  //   const res = await fetch(`http://localhost:8000/users/${id}`);
  //   const data = await res.json();
  //   return data;
  // };

  // Handle user input
  const handleInput = (e) => {
    setText(e.target.value.toLowerCase());
    handleSearch();
  };

  // Handle search
  const handleSearch = () => {
    let filteredUsers = users.filter((person) =>
      person.username.includes(text),
    );
    setUsers(filteredUsers);
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header />
            {
              <form
                className='Search__form'
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className='Search__input'
                  placeholder='Search user...'
                  value={text}
                  onInput={handleInput}
                ></input>
              </form>
            }
            {users?.length !== 0 ? <Users users={users} /> : "No users"}
            <Footer />
          </>
        }
      />
      <Route path='users/:id' element={<UserDetails />} />
    </Routes>
  );
}

export default App;
