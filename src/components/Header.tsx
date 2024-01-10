import Navbar from "./nav/Navbar";
import AuthSection from "./auth/AuthSection";
import { getUser } from "../app/actions/authActions";
import ThemeToggle from "./ThemeToggle";

export default async function Header() {
  const user = await getUser();
    return (
      <>
        <div className="fixed px-8 py-6 w-full">
          <div className="flex justify-between items-center">
            <Navbar signedIn={user != undefined}/>
            <div className = "flex items-center gap-6">
              <ThemeToggle/>
              <AuthSection />
            </div>
          </div>
        </div>
      </>
    );
  }