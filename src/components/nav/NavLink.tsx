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
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-[2px]">
          <div
            className={`relative flex px-4 py-2 rounded-lg bg-white dark:bg-slate-950 items-center justify-center hover:border-0  before:text-white overflow-hidden hover:text-white hover:shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:duration-500 before:ease-out hover:shadow-blue-400 hover:before:h-56 hover:before:w-56 ${
              pathname === path
                ? "before:h-56 before:w-56 text-white border-0"
                : "text-slate-900 dark:text-white border-slate-400 "
            }`}
          >
            <span className="relative z-10 text-lg font-semibold">{text}</span>
          </div>
        </div>
      </Link>
    </>
  );
}
