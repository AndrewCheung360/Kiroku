"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>

          <nav className="flex gap-6 items-center">
            <Link href="/">
              <div className=" rounded-lg px-3 py-2 text-3xl">
                <span className=" font-bold text-gray-800 hover:text-orange-500 transition-all ease-in-out duration-800">manga</span>
                <span className= " font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-400 text-transparent bg-clip-text hover:text-gray-800 transition-all ease-in-out duration-800">
                  spot
                </span>
              </div>
            </Link>
            <div className = "flex gap-6">
            <Link href="/dashboard">
              <div className = {`relative flex px-4 py-2 rounded-lg items-center justify-center border-2 hover:border-0 border-gray-400  before:text-white overflow-hidden hover:text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-500 before:duration-500 before:ease-out hover:shadow-orange-500 hover:before:h-56 hover:before:w-56 ${
                  pathname === "/dashboard"
                    ? "before:h-56 before:w-56 text-white border-0"
                    : "text-gray-800"
                }`}>

              
              <span
                className="relative z-10 text-lg font-semibold"
              >
                Dashboard
              </span>
              </div>
            </Link>
            <Link href="/explore">
              <div className = {`relative flex px-4 py-2 rounded-lg items-center justify-center border-2 hover:border-0 border-gray-400  before:text-white overflow-hidden hover:text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-500 before:duration-500 before:ease-out hover:shadow-orange-500 hover:before:h-56 hover:before:w-56 ${
                  pathname === "/explore"
                    ? "before:h-56 before:w-56 text-white border-0"
                    : "text-gray-800"
                }`}>

              
              <span
                className="relative z-10 text-lg font-semibold"
              >
                Explore
              </span>
              </div>
            </Link>
            </div>
           
          </nav>

    </>
  );
}
