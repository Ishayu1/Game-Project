import "./index.css";

type AvailabilityProps = {
  status: string;
  inUseCount?: number;
  totalCount?: number;
};

function Availability({ status, inUseCount = 0, totalCount = 0 }: AvailabilityProps) {

  const usagePercentage = totalCount > 0 ? (inUseCount / totalCount) * 100 : 0;



  return (
<div
  className={`w-[150px] h-[40px] rounded-lg border flex items-center justify-center relative overflow-hidden
    ${status === "in use"
      ? "bg-gradient-to-r from-[#73ccd6] to-[#567cf0] border-[#8ce1ee]"
      : status === "available"
      ? "border-2 border-[#688ffe]"
      : "border-2 border-[#688ffe]"}`
  }
>
  {status === "partial" && (
    <>
      {/* Background fill bar */}
      <div
        className={`absolute left-0 top-0 h-full 
          bg-gradient-to-r from-[#9FCAFF] to-[#CCF2FC] 
          dark:from-[#60a5fa] dark:to-[#312e81]`}
        style={{ width: `${usagePercentage}%` }}
      />


      
      {/* Foreground text */}
      <div className="relative z-10 text-black dark:text-white text-sm font-medium">
        {inUseCount}/{totalCount} IN USE
      </div>
    </>
  )}

  {status === "in use" && (
    <div className="text-white text-sm font-bold">IN USE</div>
  )}
  {status === "available" && (
    <div className="text-black dark:text-white text-sm font-normal">AVAILABLE</div>
  )}
</div>

  );
}

export default Availability;
