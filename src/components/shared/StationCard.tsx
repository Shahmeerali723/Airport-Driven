// components/StationCard.js
import Image from "next/image";

const StationCard = ({ station }: any) => {
  return (
    <div className="relative font-plus-jakarta w-full rounded-xl">
      <Image
      width={1200}
      height={400}
        src={station.image}
        alt={station.name}
        className="w-full h-[700px] rounded-xl"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black rounded-xl h-full bg-opacity-50 p-4 text-white">
        <div className="absolute bottom-16 p-4 rounded-xl">
          <h2 className="text-[40px] font-poppins font-semibold">{station.name}</h2>
        <p className="mt-2 w-[70%]">{station.description}</p>
        
        </div>
        
      </div>
    </div>
  );
};

export default StationCard;
