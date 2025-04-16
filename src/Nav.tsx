import { Link } from "react-router-dom";
import "./index.css";
import DarkModeToggle from "./dark-mode-toggle";

function Nav() {
  return (
    <nav className="relative flex items-center justify-between px-11 py-4 dark:text-white">
      {/* Left-aligned Logo */}
      <div className="mt-2 flex items-center">
        <h1 className="font-bold">Logo</h1>
      </div>

      {/* Center-aligned Navigation Links */}
      <div className="flex space-x-8">
        <Link
          to="/About"
          className="font-medium hover:font-bold hover:text-blue-700 dark:hover:text-cyan-400"
        >
          About Us
        </Link>
        <Link
          to="/"
          className="font-medium hover:font-bold hover:text-blue-700 dark:hover:text-cyan-400"
        >
          Home
        </Link>
      </div>
      {/* Right-aligned Dark Mode Toggle */}
      <div className="flex items-center">
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
