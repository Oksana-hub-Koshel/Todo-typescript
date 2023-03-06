import React, { useState } from "react";
import Input from "../../components/input/input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import { useAppDispatch } from "../../hooks/redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/reducers/authSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string): void => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <>
      <div className="flex justify-center mt-6 gap-3 items-center flex-col">
        <h2>Registration</h2>
        <Input
          inputProps={{ type: "text", placeholder: "email" }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          inputProps={{ type: "password", placeholder: "password" }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="flex justify-center mt-4  ">
        <Button onClick={() => handleRegister(email, password)}>
          Register
        </Button>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/register">
          <p>
            Already have an account?
            <br />
            <Link to="/login">Sign in</Link>
          </p>
        </Link>
      </div>
    </>
  );
};

export default Register;
