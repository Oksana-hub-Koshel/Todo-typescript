import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/reducers/authSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { resolveSrv } from "dns";
import { Alert, Box, Container, TextField, Typography } from "@mui/material";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import { isLoggedIn, startSession } from "../../session";
import { signInUser } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const handleLogin = (email: string, password: string): void => {
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(({ user }) => {
  //       dispatch(
  //         setUser({
  //           email: user.email,
  //           id: user.uid,
  //           token: user.refreshToken,
  //         })
  //       );
  //       navigate("/");
  //     })
  //     .catch(console.error);
  // };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please enter your username and password.");
      return;
    }
    setError("");

    try {
      let loginResponse = await signInUser(email, password);
      startSession(loginResponse.user);
      navigate("/");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Login
      </Typography>
      {error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      )}
      <Box component="form" onSubmit={onSubmitHandler}>
        <TextField
          label="Email"
          variant="outlined"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mt: 1 }}
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mt: 3 }}
          fullWidth
        />
        <button type="submit" className="flex text-cyan-800 mt-4 ml-40">
          Login
        </button>
        <Box sx={{ mt: 2 }}>
          Don't have an account yet? <Link to="/register">Register</Link>
        </Box>
      </Box>
    </Container>
    // {/*<div className="flex justify-center mt-6 gap-3 items-center flex-col">*/}
    // {/*  <h2>Login</h2>*/}
    // {/*  <Input*/}
    // {/*    inputProps={{ type: "text", placeholder: "email" }}*/}
    // {/*    onChange={(e) => setEmail(e.target.value)}*/}
    // {/*    value={email}*/}
    // {/*  />*/}
    //
    // {/*  <Input*/}
    // {/*    inputProps={{ type: "password", placeholder: "password" }}*/}
    // {/*    onChange={(e) => setPassword(e.target.value)}*/}
    // {/*    value={password}*/}
    // {/*  />*/}
    // {/*  <Button onClick={() => handleLogin(email, password)}>Login</Button>*/}
    // {/*</div>*/}
    // {/*<div className="flex justify-center mt-4">*/}
    // {/*  <Link to="/register">*/}
    // {/*    <p>Register here...</p>*/}
    // {/*  </Link>*/}
    // /*</div>*/
  );
};

export default Login;
