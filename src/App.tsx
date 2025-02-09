import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Card from "./Card";

function App() {
  const machines_eighth = [
    { name: "Pool Table", status: "available" },
    { name: "Pandora's Box", status: "in use" },
  ];
  const machines_price = [
    { name: "Pool Table", status: "partial", inUseCount: 6, totalCount: 10 },
    { name: "Air Hockey", status: "in use"},
  ];
  return (
    <Router>
      <div className="min-h-screen w-screen bg-gradient-to-b from-[#8ADEEE] via-[#D0F2F8] to-[#FFFFFF] box-border overflow-x-hidden">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="mt-20 ml-11 w-full max-w-lg">
                  <h1
                    className="text-3xl bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #000000 40%, #6A92FD 50%)",
                    }}
                  >
                    Know What's Available Instantly
                  </h1>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  <div className="mt-20 ml-11 mr-11 w-full max-w-lg font-normal">
                    <h2 className="text-2xl">Eighth College</h2>
                    <Card machines={machines_eighth}/>
                  </div>
                  <div className="mt-20 ml-11 mr-11 w-full max-w-lg font-normal">
                    <h2 className="text-2xl">Price Center</h2>
                    <Card machines={machines_price}/>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;



