import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../input/input";
import Button from "../button/button";
import { useAppDispatch } from "../../hooks/redux";
import { removeUser } from "../../redux/reducers/authSlice";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <div className="bg-gray-400 flex gap-3 justify-between h-12 p-2 px-6   shadow-2xl">
      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className="flex gap-2">
        <Input
          inputProps={{ placeholder: "type here...", type: "text" }}
          onChange={() => {}}
          value={value}
        />
        <Button onClick={signOutHandler} children={"Sign Out"} />
      </div>
    </div>
  );
};

export default Header;
