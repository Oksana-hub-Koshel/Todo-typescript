import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "../../../components/textField/textField";
import Button from "../../../components/button/button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { editUser } from "../../../redux/reducers/userSlice";

const EditUser: React.FC = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  const existingUser = users.filter(
    (user) => Number(user.id) === Number(params.id)
  );
  const { name, email } = existingUser[0];

  const onEditUser = () => {
    dispatch(
      editUser({
        id: Number(params.id),
        name: values.name,
        email: values.email,
      })
    );
    setValues({
      name: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: name }}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        value={values.name}
      />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: email }}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />
      <div className="mt-4">
        <Button onClick={onEditUser}>Edit</Button>
      </div>
    </div>
  );
};

export default EditUser;
