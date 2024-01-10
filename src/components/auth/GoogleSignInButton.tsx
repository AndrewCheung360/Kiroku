"use client";
import GoogleSvg from "./GoogleIcon";
import { createClient } from "../../../utils/supabase/client"

export default function GoogleSignInButton() {
  const handleGoogleSignIn = () => {
    const supabase = createClient()
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }
  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex w-[90%] border-2 justify-center h-[10%] items-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
    >
      <GoogleSvg styleString="w-10 h-6" />
      <span className="font-semibold text-sm text-slate-900 dark:text-neutral-100 ">
        Sign in with Google
      </span>
    </button>
  );
}
