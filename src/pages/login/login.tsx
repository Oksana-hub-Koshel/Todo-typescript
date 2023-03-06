import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/reducers/authSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { resolveSrv } from "dns";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
        <h2>Login</h2>
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
        <Button onClick={() => handleLogin(email, password)}>Login</Button>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/register">
          <p>Register here...</p>
        </Link>
      </div>
    </>
  );
};

export default Login;