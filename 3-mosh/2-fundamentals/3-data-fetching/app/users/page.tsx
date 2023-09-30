import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users"); // simple method
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  }); // data fetching with catching data, it'll get fresh data from the backend every 10 seconds
  const users: User[] = await response.json();

  return (
    <>
      <h1 className="font-bold mb-4">Users List :</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
