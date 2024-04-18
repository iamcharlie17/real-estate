import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Neighborhood = () => {
  const [neighbors, setNeighbors] = useState([]);
  useEffect(() => {
    fetch("neighborhood.json")
      .then((r) => r.json())
      .then((data) => setNeighbors(data));
  }, []);
  return (
    <div className="bg-[#cef7ec] p-4 md:p-16 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="text-xl uppercase font-bold text-[#3fb89a]"
          >
            Top areas
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-3xl font-semibold"
          >
            Find Your Neighborhood
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          <button className="md:px-6 px-2 py-2 text-white bg-[#3fb89a] font-bold hover:bg-[#398572] hover:scale-110 transition-transform">
            Explore More
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gridcol1 gap-4">
        {neighbors.map((n, idx) => (
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay={`${idx}00`}
            data-aos-easing="ease-in-out"
            key={idx}
          >
            <div className="rounded-lg bg-white ">
              <div
                className=" h-64 bg-cover"
                style={{
                  backgroundImage: `url(${n.image})`,
                }}
              ></div>
              <div className="flex justify-between items-center p-8 ">
                <div>
                  <h1 className="text-gray-500">2 Properties</h1>
                  <h1 className="font-bold text-xl">{n.name}</h1>
                </div>
                <button className="p-3 rounded-full bg-[#cef7ec] text-[#3fb89a] hover:text-white hover:bg-[#398572] hover:rotate-45 transition-transform">
                  <FaArrowRight size={25} className=" -rotate-45" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Neighborhood;
