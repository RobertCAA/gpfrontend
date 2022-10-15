import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import UserList from "./api/users/UserList";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='users'>
          <Route index element={<UserList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
