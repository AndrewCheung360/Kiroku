type SignButtonProps = {
  haveAccount: boolean;
};

export default function SignButton({ haveAccount }: SignButtonProps) {
  return (
    <>
      <button
        type="submit"
        className="before:ease relative px-4 py-2 rounded-lg w-full font-semibold text-sm overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-80"
      >
        <span className="relative z-10  text-white ">
          {haveAccount ? "Sign up" : "Sign in"}
        </span>
      </button>
    </>
  );
}
