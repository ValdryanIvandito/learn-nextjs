"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  // if (status === "loading") return null;

  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5 hover:font-bold">
        Home
      </Link>
      <Link href="/users" className="mr-5 hover:font-bold">
        Users
      </Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-5">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5 hover:font-bold">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
