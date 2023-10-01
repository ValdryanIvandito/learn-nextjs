import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users"); // simple method
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  }); // data fetching with catching data, it'll get fresh data from the backend every 10 seconds
  const users: User[] = await response.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <th>{user.name}</th>
            <th>{user.email}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
