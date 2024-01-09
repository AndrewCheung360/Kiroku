import Navbar from "./nav/Navbar";
import AuthSection from "./auth/AuthSection";

export default function Header() {
    return (
      <>
        <div className="fixed px-8 py-6 w-full">
          <div className="flex justify-between items-center">
            <Navbar/>
            <div>
              <AuthSection />
            </div>
          </div>
        </div>
      </>
    );
  }