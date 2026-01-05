import logo from "../assets/rectangle/logo (1).png";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { AiOutlineContainer } from "react-icons/ai";


const NAVLINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Tour Packages", path: "/tourpackages" },
  { name: "Contact Us", path: "/contactus" },
];

function Header() {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // effect to header
  useEffect(() => {
    const handleScroll = () => {
      // just to home page
      // if (location.pathname === "*") {
      //   setIsScrolled(window.scrollY > 10);
      // } else {
      //   setIsScrolled(true);
      // }

      // all pages
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <div>
        <img className="h-16" src={logo} alt="image not found" />
      </div>
      {/* Nav Links */}
      <nav className="flex gap-6">
        {NAVLINKS.map((link) => (
          <NavLink
            to={link.path}
            key={link.name}
            className={({ isActive }) =>
              isActive
                ? `text-orange-500`
                : `relative after:absolute after:left-0 after:-bottom-1
              after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 
              hover:after:w-full cursor-pointer `
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      {/* Auth Area */}
      <div className="flex items-center gap-5">
        {/* المستخدم غير مسجّل */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="cursor-pointer">Login</button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="bg-orange-400 px-4 py-2 rounded-2xl cursor-pointer text-white font-medium">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        {/* المستخدم مسجّل */}
        <SignedIn>
          <UserButton afterSignOutUrl="/">
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Tickets"
                labelIcon={<AiOutlineContainer />}
                onClick={() => navigate("/mytickets")}
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
