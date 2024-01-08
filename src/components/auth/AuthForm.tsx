"use client";

export default function AuthForm() {
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col items-center justify-start gap-6 bg-white py-4 rounded-lg w-[30%] h-[80%] px-3"
      >
        <div className=" rounded-lg px-3 py-2 flex justify-center">
          <span className="text-4xl font-bold text-gray-800">manga</span>
          <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-400 text-transparent bg-clip-text">
            spot
          </span>
        </div>
        <button className="flex w-[90%] border-2 justify-center h-[10%] items-center py-2 rounded-lg hover:bg-gray-100 ">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-10 h-6"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            ></path>
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            ></path>
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            ></path>
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            ></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
          <span className="font-semibold text-sm text-gray-800">
            Sign in with Google
          </span>
        </button>
        <div className="flex justify-center items-center gap-2">
          <div className="h-px bg-gray-200 w-36" />
          <span className="font-semibold text-xs text-gray-500">or</span>
          <div className="h-px bg-gray-200 w-36" />
        </div>
        <form className="flex flex-col items-center w-[90%] h-[45%] gap-9">
          <div className="h-[20%] w-full flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500">Email</label>
            <input
              className="border-2 border-gray-200 rounded-lg w-full h-[50%] px-4 py-4 placeholder:text-sm focus:outline-gray-400"
              type="text"
              placeholder="Your email address"
            />
          </div>
          <div className="flex flex-col items-center justify-between w-full">
            <div className="h-[20%] w-full flex flex-col gap-1 ">
              <div className="flex justify-between w-full">
                <label className="text-xs font-semibold text-gray-500">
                  Password
                </label>
                <button className="text-xs font-semibold text-orange-500 underline">
                  Forgot password?
                </button>
              </div>
              <input
                className="border-2 border-gray-200 rounded-lg w-full h-[50%] px-4 py-4 placeholder:text-sm focus:outline-gray-400"
                type="password"
                placeholder="Your password"
              />
            </div>
            <button
              type="submit"
              className="before:ease relative px-4 py-2 rounded-lg w-full font-semibold text-sm overflow-hidden border border-orange-400 bg-orange-400 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-80"
            >
              <span className="relative z-10">Sign in</span>
            </button>
          </div>
          <button className="flex justify-center items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 underline">
              Don't have an account?
            </span>
            <span className="text-xs font-semibold text-orange-500 hover:underline">
              Sign up
            </span>
          </button>
        </form>
      </div>
    </>
  );
}
