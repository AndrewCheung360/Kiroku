"use client";
import Link from "next/link";
import Logo from "../Logo";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <>
      <nav className="flex gap-7 items-center">
        <Link href="/">
          <Logo
            wrapStyle="rounded-lg px-3 py-2 text-3xl"
            mangaStyle="hover:text-orange-500 transition-all ease-in-out duration-800"
            spotStyle="hover:text-gray-800 transition-all ease-in-out duration-800"
          />
        </Link>
        <div className="flex gap-6">
          <NavLink path="/dashboard" text="Dashboard" />
          <NavLink path="/explore" text="Explore" />
        </div>
      </nav>
    </>
  );
}
