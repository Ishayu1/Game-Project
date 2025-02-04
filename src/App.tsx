import Nav from "./Nav";
import { useState } from "react";


function App() {
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
        <div className="min-h-screen w-full bg-gradient-to-b from-[#8ADEEE] via-[#D0F2F8] to-[#FFFFFF]">
          <Nav />
          <div className="mt-18 ml-11 w-full max-w-lg">
            <h1
              className="text-4xl bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #000000 25%, #6A92FD 40%)',
              }}
            >
              Know What's Available Instantly
            </h1>
          </div>

        </div>
      </>
    );
    
  }
  
  export default App;