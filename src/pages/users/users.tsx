import React from "react";
import UserList from "./userList/userList";

const Users = () => {
  return (
    <div style={{ margin: 30 }}>
      <h1 className="flex justify-center mt-5 mb-5 font-bold text-lg text-gray-600">
        Users List
      </h1>
      <UserList />
    </div>
  );
};

export default Users;
