import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen bg-gradient-to-b from-[#8ADEEE] via-[#D0F2F8] to-[#FFFFFF] box-border overflow-x-hidden">
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
