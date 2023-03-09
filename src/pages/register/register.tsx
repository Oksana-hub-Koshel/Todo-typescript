import React, { useEffect, useState } from "react";
import Input from "../../components/input/input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import { useAppDispatch } from "../../hooks/redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/reducers/authSlice";
import { Alert, Box, Container, TextField, Typography } from "@mui/material";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import { createUser } from "../../firebase";
import { isLoggedIn, startSession } from "../../session";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const handleRegister = (email: string, password: string): void => {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !repeatPassword) {
      setError("Please fill out all the fields.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    try {
      let registerResponse = await createUser(email, password);
      startSession(registerResponse.user);
      navigate("/");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom textAlign="center">
          Register
        </Typography>
        {error && (
          <Alert severity="error" sx={{ my: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={onSubmit}>
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
          <TextField
            label="Repeat password"
            variant="outlined"
            type="password"
            autoComplete="off"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            sx={{ mt: 3 }}
            fullWidth
          />
          <button type="submit" className="flex text-cyan-800 mt-4 ml-40">
            Register
          </button>
          <Box sx={{ mt: 2 }}>
            Already have an account? <Link to="/login">Login</Link>
          </Box>
        </Box>
      </Container>
      {/*<div className="flex justify-center mt-6 gap-3 items-center flex-col">*/}
      {/*  <h2>Registration</h2>*/}
      {/*  <Input*/}
      {/*    inputProps={{ type: "text", placeholder: "email" }}*/}
      {/*    onChange={(e) => setEmail(e.target.value)}*/}
      {/*    value={email}*/}
      {/*  />*/}

      {/*  <Input*/}
      {/*    inputProps={{ type: "password", placeholder: "password" }}*/}
      {/*    onChange={(e) => setPassword(e.target.value)}*/}
      {/*    value={password}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className="flex justify-center mt-4  ">*/}
      {/*  <Button onClick={() => handleRegister(email, password)}>*/}
      {/*    Register*/}
      {/*  </Button>*/}
      {/*</div>*/}
      {/*<div className="flex justify-center mt-4">*/}
      {/*  <Link to="/register">*/}
      {/*    <p>*/}
      {/*      Already have an account?*/}
      {/*      <br />*/}
      {/*      <Link to="/login">Sign in</Link>*/}
      {/*    </p>*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </>
  );
};

export default Register;
