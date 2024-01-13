'use client'
export default function SignOutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <div className = "bg-gradient-to-r rounded-lg from-cyan-500 to-blue-500 p-[2px]">
      <button className="relative flex px-4 py-2 rounded-lg items-center justify-center bg-white dark:bg-slate-950 hover:border-0 border-slate-400 text-slate-900 overflow-hidden hover:text-white hover:shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:duration-500 before:ease-out hover:shadow-blue-400 hover:before:h-56 hover:before:w-56 dark:text-white">
        <span className="relative z-10 font-semibold">Sign out</span>
      </button>
      </div>
      
    </form>
  );
}
