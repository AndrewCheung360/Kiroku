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
            wrapStyle="rounded-lg px-3 py-2 flex items-center gap-2"
            textStyle="transition-all ease-in-out duration-800 text-4xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"
            iconStyle="hover:text-gray-800 hover:dark:text-white transition-all ease-in-out duration-800 text-4xl"
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
