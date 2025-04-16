import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home"; 

function App() {
  return (
    <Router>
      <div className="
        min-h-screen w-screen 
        transition-colors duration-500 
        bg-gradient-to-b from-[#8ADEEE] via-[#D0F2F8] to-[#FFFFFF]
        dark:bg-gradient-to-b dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155]
        box-border overflow-x-hidden
      ">
        <Nav />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
