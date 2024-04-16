// https://i.ibb.co/ZX9Vgz5/facility-bg.jpg
// https://i.ibb.co/GTgV4j1/facility-cover.jpg
import { FaCheck } from "react-icons/fa";

const Facilities = () => {
  return (
    <div
      className="p-16 flex gap-8 bg-cover bg-right-bottom bg-no-repeat"
      style={{
        background: `url(https://i.ibb.co/ZX9Vgz5/facility-bg.jpg)`,
        backgroundSize: "30%",
      }}
    >
      <div className="bg-[#3fb89a] p-12 w-full">
        <img src="https://i.ibb.co/GTgV4j1/facility-cover.jpg" alt="" />
      </div>
      <div className="p-12 space-y-4">
        <h1 className="text-2xl text-[#3fb89a] font-bold uppercase">
          Why chose our Properties?
        </h1>
        <h2 className="text-3xl font-semibold">
          The experts in local and international property
        </h2>
        <p className="text-gray-500">
          Agent hen an unknown printer took a galley of type and scramble d it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic.
        </p>
        <ul className="p-4">
          <li className="flex gap-2 items-center">
            {" "}
            <FaCheck color="#3fb89a" /> Outstanding Properties
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <FaCheck color="#3fb89a" /> Modern City Location
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <FaCheck color="#3fb89a" /> Specialist services
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <FaCheck color="#3fb89a" /> Market-leading researce
          </li>
        </ul>
        <button className="md:px-6 px-2 py-2  bg-[#cef7ec] font-bold hover:bg-[#398572] hover:text-white hover:scale-110 transition-transform text-[#3fb89a]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Facilities;
