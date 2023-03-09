import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Input from "../input/input";
import Button from "../button/button";
import { useAppDispatch } from "../../hooks/redux";
import { removeUser } from "../../redux/reducers/authSlice";
import { useAuth } from "../../hooks/useAuth";
import { endSession, isLoggedIn } from "../../session";

const Header = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const signOutHandler = () => {
  //   dispatch(removeUser());
  //   navigate("/login");
  // };

  const onLogout = () => {
    endSession();
    navigate("/login");
  };

  return (
    <div className="bg-gray-400 flex gap-3 justify-between h-12 p-2 px-6   shadow-2xl">
      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
      </div>
      <div className="flex gap-2">
        <Input
          inputProps={{ placeholder: "type here...", type: "text" }}
          onChange={() => {}}
          value={value}
        />

        {isLoggedIn() ? (
          <Button onClick={onLogout} children={"Sign Out"} />
        ) : (
          <Link to="/login">
            <Button onClick={() => {}} children={"Login"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
