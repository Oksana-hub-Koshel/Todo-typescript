import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/input";

const Header = () => {
  const [value, setValue] = useState("");
  return (
    <div className="bg-gray-400 flex gap-3 justify-between h-12 p-2 px-6   shadow-2xl">
      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <Input
        inputProps={{ placeholder: "type here...", type: "text" }}
        onChange={() => {}}
        value={value}
      />
    </div>
  );
};

export default Header;
