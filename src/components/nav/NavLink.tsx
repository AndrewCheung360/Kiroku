"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  path: string;
  text: string;
};

export default function NavLink({ path, text }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <>
      <Link href={path}>
        <div
          className={`relative flex px-4 py-2 rounded-lg items-center justify-center border-2 hover:border-0  before:text-white overflow-hidden hover:text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-500 before:duration-500 before:ease-out hover:shadow-orange-500 hover:before:h-56 hover:before:w-56 ${
            pathname === path
              ? "before:h-56 before:w-56 text-white border-0"
              : "text-gray-800 dark:text-white border-gray-400 "
          }`}
        >
          <span className="relative z-10 text-lg font-semibold">{text}</span>
        </div>
      </Link>
    </>
  );
}
