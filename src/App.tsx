import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search/search";
import List from "./components/list/list";
import AddItem from "./components/add_item";
import useProducts from "./components/useFetch/useFetch";
import Done from "./components/done/done";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import userSlice from "./redux/reducers/userSlice";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/users/users";
import Header from "./components/header/header";
import Todo from "./pages/todo/todo";
import AddUser from "./pages/users/addUser/AddUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
