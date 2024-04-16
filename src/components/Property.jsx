import { IoLocationOutline } from "react-icons/io5";
import { FaChartArea } from "react-icons/fa";

// signboard --> https://i.ibb.co/9sG1tmv/signboard.png

const Property = ({ property }) => {
  console.log(property);
  const { image, estate_title, location, area, segment_name, price, status } =
    property;
  console.log(status);
  return (
    <div className="border-2 rounded-xl shadow-lg bg-white relative property-container hover:scale-105 transition-transform">
      <div
        className="h-64 bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="absolute top-[190px] text-white text-3xl font-bold left-4">
        <p>{price}</p>
      </div>
      <div className="absolute top-[230px] left-4">
        <h1 className="bg-white px-4 p-1 rounded-t-lg text-[#3fb89a]">
          {segment_name}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="p-4 space-y-4">
          <h1 className="text-2xl font-bold">{estate_title}</h1>
          <h2 className=" text-slate-400 flex items-center gap-1">
            <IoLocationOutline color="#3fb89a" size={20} />
            {location}
          </h2>
          <p className="text-lg flex items-center gap-1">
            <FaChartArea color="#3fb89a" size={20} /> {area}
          </p>
        </div>
        {status === "sale" ? (
          <h1 className=" font-bold text-xl px-2 text-white bg-[#3fb89a] ">SALE</h1>
        ) : (
          <h1 className=" font-bold text-xl px-2 text-white bg-[#3fb89a]">RENT</h1>
        )}
      </div>
      <div className="text-center my-4">
        <button className="md:px-6 px-2 py-2 text-white bg-[#3fb89a] font-bold hover:bg-[#398572] hover:scale-110 transition-transform">
          View Property
        </button>
      </div>
    </div>
  );
};

export default Property;
