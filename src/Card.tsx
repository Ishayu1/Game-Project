import Availability from "./Availability";
import "./index.css";

type Machine = {
  name: string;
  status: string;
  inUseCount?: number;
  totalCount?: number;
};


function Card({ machines }: {machines: Machine[] }) {
  return (
<div className="max-w-lg rounded-xl overflow-hidden shadow-lg mt-8 
  bg-gradient-to-br from-[#B8E5F3] to-[#D0F2FA] 
  dark:bg-gradient-to-br dark:from-[#1e1b4b] dark:to-[#312e81]
  border border-[#9ED4E0] dark:border-[#6366f1] dark:border-1
  text-black dark:text-white dark:shadow-[#1e1b4b]
  transition-all duration-500 mb-8">
  
      <div className="font-normal text-xl mb-1 ml-4 mt-4">Game Room</div>
      <hr className="mb-2 mx-4" />
      <div className="px-6 py-4 space-y-4">
        {machines.map((machine,index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2 w-2 h-[22px] bg-[#3fa6be] dark:bg-orange-500 rounded-[90px]"></div>
                <p className="text-gray-700 text-base dark:text-white">{machine.name}:</p>
            </div>
            <Availability
              status={machine.status}
              inUseCount={machine.inUseCount}
              totalCount={machine.totalCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
