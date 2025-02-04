import { useState } from "react";
import "./index.css";
import { Link, useLocation} from "react-router-dom";
import About from "./About";


function Nav() {
  const [count, setCount] = useState(0);
  const [maxCount, setmaxCount] = useState(0);

  const handleMax = () => {
    if (count > maxCount) {
      setmaxCount((maxCount) => count);
    }
    setCount(0);
  };

  return (
    <>
      <nav className="relative flex items-center px-10 py-4">
        {/* Left-aligned Logo */}
        <div className="flex items-center">
          <h1 className="font-bold">Logo</h1>
        </div>
        {/* Center-aligned About Us */}
        <p className="absolute left-1/2 transform -translate-x-1/2">
          About Us
        </p>
      </nav>
    </>
  );
}

export default Nav;
