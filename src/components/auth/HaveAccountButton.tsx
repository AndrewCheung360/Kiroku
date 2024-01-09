type HaveAccountButtonProps = {
  haveAccount: boolean;
  setHaveAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HaveAccountButton({
  haveAccount,
  setHaveAccount,
}: HaveAccountButtonProps) {
  return (
    <>
      <button
        onClick={() => {
          setHaveAccount(!haveAccount);
        }}
        className="flex justify-center items-center gap-2"
      >
        <span className="text-xs font-semibold text-gray-500 underline">
          {haveAccount ? "Already have an account?" : "Don't have an account?"}
        </span>
        <span className="text-xs font-semibold text-orange-500 hover:underline">
          {haveAccount ? "Sign in" : "Sign up"}
        </span>
      </button>
    </>
  );
}
