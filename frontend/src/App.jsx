import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import UserList from "./components/UserList";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/delete" element={<DeleteUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
