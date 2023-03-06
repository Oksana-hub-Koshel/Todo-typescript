import React from "react";
import UserList from "./userList/userList";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {isAuth ? (
        <div style={{ margin: 30 }}>
          <h1 className="flex justify-center mt-5 mb-5 font-bold text-lg text-gray-600">
            Users List
          </h1>
          <UserList />
        </div>
      ) : (
        <p className="text-center mt-4">
          Need to{" "}
          <Link to="/login" className="underline">
            login
          </Link>
        </p>
      )}
    </>
  );
};

export default Users;
