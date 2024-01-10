"use client";
import { useState } from "react";
import GoogleSignInButton from "./GoogleSignInButton";
import Logo from "../Logo";
import FormInput from "./FormInput";
import HaveAccountButton from "./HaveAccountButton";
import SignButton from "./SignButton";

export default function AuthForm() {
  const [haveAccount, setHaveAccount] = useState(false);

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col items-center justify-start gap-6 bg-white dark:bg-neutral-900 dark:border-neutral-800 dark:border-2 py-4 rounded-xl w-[30%] h-[80%] px-3"
      >
        <Logo
          wrapStyle=" rounded-lg px-3 py-2 flex justify-center"
          mangaStyle="text-4xl"
          spotStyle="text-4xl"
        />
        <GoogleSignInButton />
        <div className="flex justify-center items-center gap-2">
          <div className="h-px bg-gray-200 w-36" />
          <span className="font-semibold text-xs text-gray-500 dark:text-neutral-100">or</span>
          <div className="h-px bg-gray-200 w-36" />
        </div>
        <form
          action={haveAccount ? "/auth/sign-up" : "/auth/sign-in"}
          method = "post"
          className="flex flex-col items-center w-[90%] h-[45%]"
        >
          <div className="flex flex-col items-center w-full h-[80%] gap-9">
            <FormInput
              name="email"
              label="Email"
              type="email"
              placeholder="Your email"
            />

            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="Your password"
            />
          </div>
          <SignButton haveAccount={haveAccount} />
        </form>
        <HaveAccountButton
          haveAccount={haveAccount}
          setHaveAccount={setHaveAccount}
        />
      </div>
    </>
  );
}
