import { getUser } from "../../app/actions/authActions";
import AuthButton from "./AuthButton";
import AuthModal from "./AuthModal";
import SignOutButton from "./SignOutButton";

export default async function AuthSection() {
  const user = await getUser();

  return user ? (
    <div>
      <SignOutButton/>
    </div>
  ) : (
    <div>
      <AuthButton />
      <AuthModal />
    </div>
  );
}
