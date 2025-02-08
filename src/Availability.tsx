type AvailabilityProps = {
  status: string;
  inUseCount?: number;
  totalCount?: number;
};

function Availability({ status, inUseCount = 0, totalCount = 0 }: AvailabilityProps) {

  const usagePercentage = totalCount > 0 ? (inUseCount / totalCount) * 100 : 0;

  const partialGradient = {
    background: `linear-gradient(to right, #688ffe ${usagePercentage - (usagePercentage === 0 || usagePercentage === 100? 0 : 20)}%, #92e7f2 ${usagePercentage}%)`,
  };  

  return (
    <div
      className={`w-[150px] h-[40px] rounded-lg border flex items-center justify-center ${
        status === "in use"
          ? "bg-gradient-to-r from-[#73ccd6] to-[#567cf0] border-[#8ce1ee]"
          : status === "available"
          ? "border-2 border-[#688ffe]"
          : "border-2 border-[#688ffe]"
      }`}
      style={status === "partial" ? partialGradient : undefined}
    >
      {status === "in use" && (
        <div className="text-white text-sm font-bold">IN USE</div>
      )}
      {status === "available" && (
        <div className="text-black text-sm font-normal">AVAILABLE</div>
      )}
      {status === "partial" && (
        <div className="text-black text-sm font-medium">
          {inUseCount}/{totalCount} IN USE
        </div>
      )}
    </div>
  );
}

export default Availability;
