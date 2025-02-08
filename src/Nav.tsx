import { Link } from "react-router-dom";
import "./index.css";

function Nav() {
  return (
    <nav className="relative flex items-center justify-between px-11 py-4">
      {/* Left-aligned Logo */}
      <div className="mt-2 flex items-center">
        <h1 className="font-bold">Logo</h1>
      </div>

      {/* Center-aligned Navigation Links */}
      <div className="flex space-x-8">
        <Link
          to="/About"
          className="font-medium hover:font-bold hover:text-blue-700"
        >
          About Us
        </Link>
        <Link
          to="/"
          className="font-medium hover:font-bold hover:text-blue-700"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
