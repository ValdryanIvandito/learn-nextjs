import React from "react";
import UserTable from "./UserTable";

const UsersPage = async () => {
  return (
    <>
      <h1 className="font-bold mb-4">Users List :</h1>
      <UserTable />
    </>
  );
};

export default UsersPage;
