import { useState } from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";
import NavBar from "./components/NavBar";
import ViewUsers from "./components/ViewUsers";
import { Routes, Route,Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="users/create" />} />
          <Route path="users/create" element={<CreateUser handleSubmit={addUser} />} />
          <Route path="users/view" element={<ViewUsers users={users} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
