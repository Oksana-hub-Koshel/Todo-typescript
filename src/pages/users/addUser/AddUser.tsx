import React, { useState } from "react";
import TextField from "../../../components/textField/textField";
import Button from "../../../components/button/button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { addUser } from "../../../redux/reducers/userSlice";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHandleSubmit = () => {
    dispatch(addUser({ name, email, id: 9 }));
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="container mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "Jane" }}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "Jane@mail.com" }}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="mt-4">
        <Button onClick={onHandleSubmit}>Add User</Button>
      </div>
    </div>
  );
};

export default AddUser;
