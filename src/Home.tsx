import Card from "./Card";

function Home() {
  const machines_eighth = [
    { name: "Pool Table", status: "available" },
    { name: "Pandora's Box", status: "in use" },
  ];
  const machines_price = [
    { name: "Pool Table", status: "partial", inUseCount: 6, totalCount: 10 },
    { name: "Air Hockey", status: "in use" },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Title - Centered at all screen sizes */}
      <div className="mt-20 w-full max-w-4xl px-4 flex justify-center">
      <h1
        className="text-4xl text-center sm:text-4xl px-4 break-words bg-clip-text text-transparent"
        style={{
            backgroundImage: "linear-gradient(to right, #000000 40%, #6A92FD 60%)",
        }}
        >
        Know What's Available Instantly
      </h1>

      </div>
  
      {/* Locations - Side by Side if Wide, Centered if Stacked */}
      <div className="flex flex-wrap justify-center items-start mt-20 gap-16 w-full">
        {/* Eighth College */}
        <div className="mt-10 w-full max-w-lg mx-auto lg:mx-0 px-1">
          <h2 className="text-2xl text-left">Eighth College</h2>
          <Card machines={machines_eighth} />
        </div>
  
        {/* Price Center */}
        <div className="mt-10 w-full max-w-lg mx-auto lg:mx-0 px-1">
          <h2 className="text-2xl text-left">Price Center</h2>
          <Card machines={machines_price} />
        </div>
      </div>
    </div>
  );
  
}

export default Home;
