import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users"); // simple method
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  }); // data fetching with catching data, it'll get fresh data from the backend every 10 seconds
  const users: User[] = await response.json();

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
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
