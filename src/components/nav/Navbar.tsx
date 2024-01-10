"use client";
import Link from "next/link";
import Logo from "../Logo";
import NavLink from "./NavLink";
import DashButton from "./DashboardButton";

type NavbarProps = {
  signedIn: boolean;
};

export default function Navbar({ signedIn }: NavbarProps) {
  return (
    <>
      <nav className="flex gap-7 items-center">
        <Link href="/">
          <Logo
            wrapStyle="rounded-lg px-3 py-2 text-3xl"
            mangaStyle="hover:text-cyan-500 transition-all ease-in-out duration-800"
            spotStyle="hover:text-gray-800 hover:dark:text-white transition-all ease-in-out duration-800"
          />
        </Link>
        <div className="flex gap-6">
          {signedIn ? <NavLink path="/dashboard" text="Dashboard" /> : <DashButton />}
          <NavLink path="/explore" text="Explore" />
        </div>
      </nav>
    </>
  );
}
