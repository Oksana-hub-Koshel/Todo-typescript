import React, { useEffect, useState } from "react";
import UserList from "./userList/userList";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { endSession, getSession, isLoggedIn } from "../../session";
import { Container, Typography } from "@mui/material";

const Users = () => {
  // const { isAuth } = useAuth();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }

    let session = getSession();
    setEmail(session.email);

    console.log("Your access token is: " + session.accessToken);
  }, [navigate]);

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
          You're logged in as:
        </Typography>
        <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
          {email}
        </Typography>
      </Container>
      <div style={{ margin: 30 }}>
        <h1 className="flex justify-center mt-5 mb-5 font-bold text-lg text-gray-600">
          Users List
        </h1>
        <UserList />
      </div>
    </>
  );
};

export default Users;
