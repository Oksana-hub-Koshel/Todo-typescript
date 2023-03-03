import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/users/users";
import Header from "./components/header/header";
import Todo from "./pages/todo/todo";
import AddUser from "./pages/users/addUser/AddUser";
import EditUser from "./pages/users/editUser/editUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
