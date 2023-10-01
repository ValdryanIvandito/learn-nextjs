import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5 hover:font-bold">
        Home
      </Link>
      <Link href="/users" className="hover:font-bold">
        Users
      </Link>
    </div>
  );
};

export default NavBar;
