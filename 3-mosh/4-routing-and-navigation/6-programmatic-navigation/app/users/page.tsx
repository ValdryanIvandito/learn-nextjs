import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1 className="font-bold mb-4">Users List :</h1>
      <Link href="/users/new" className="btn rounded-xl mb-3">Add User</Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
