import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getUsers } from "./api/axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/Users";
import SearchBar from "./components/SearchBar";
import UserDetails from "./components/UserDetails";
import TopBar from "./components/TopBar";

function App() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Loads users from server. It mounts one time.
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setSearchResults(data);
    });
  }, []);

  // Fetch users
  // const fetchUsers = async () => {
  //   const res = await fetch("http://localhost:8000/users");
  //   const data = await res.json();
  //   return data;
  // };

  //  // Fetch single user (not working)
  //  const fetchUser = async (id) => {
  //   const res = await fetch(`http://localhost:8000/users/${id}`);
  //   const data = await res.json();
  //   return data;
  // };

  // // Handle user input
  // const handleInput = (e) => {
  //   setText(e.target.value.toLowerCase());
  //   handleSearch();
  // };

  // // Handle search
  // const handleSearch = () => {
  //   let filteredUsers = users.filter((person) =>
  //     person.username.includes(text),
  //   );
  //   setUsers(filteredUsers);
  // };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <TopBar users={users} setSearchResults={setSearchResults} />
              <Users searchResults={searchResults} />
              <Footer />
            </>
          }
        />
        <Route path='/users/:id' element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
