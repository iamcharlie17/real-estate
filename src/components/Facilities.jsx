// https://i.ibb.co/ZX9Vgz5/facility-bg.jpg
// https://i.ibb.co/GTgV4j1/facility-cover.jpg
import { FaCheck } from "react-icons/fa";

const Facilities = () => {
  return (
    <div
      className="p-4 md:p-16 flex flex-col lg:flex-row gap-8  "
      style={{
        background: `url(https://i.ibb.co/ZX9Vgz5/facility-bg.jpg)`,
        backgroundSize: "30%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
      }}
    >
      <div className="bg-[#3fb89a] p-8 md:p-12 w-full flex items-center justify-center">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay={`200`}
          data-aos-easing="ease-in-out"
          data-aos-once ={true}
          src="https://i.ibb.co/GTgV4j1/facility-cover.jpg"
          alt=""
        />
      </div>
      <div className="md:p-12 space-y-4">
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once ={true}
          className="text-2xl text-[#3fb89a] font-bold uppercase"
        >
          Why choose our Properties?
        </h1>
        <h2
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
          data-aos-once ={true}
          className="text-3xl font-semibold"
        >
          The experts in local and international property
        </h2>
        <p
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          data-aos-once ={true}
          className="text-gray-500"
        >
          Agent hen an unknown printer took a galley of type and scramble d it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic.
        </p>
        <ul className="p-4">
          <li
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-once ={true}
            className="flex gap-2 items-center"
          >
            {" "}
            <FaCheck color="#3fb89a" /> Outstanding Properties
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-once ={true}
            className="flex gap-2 items-center"
          >
            {" "}
            <FaCheck color="#3fb89a" /> Modern City Location
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="1200"
            data-aos-once ={true}
            className="flex gap-2 items-center"
          >
            {" "}
            <FaCheck color="#3fb89a" /> Specialist services
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="1600"
            data-aos-once ={true}
            className="flex gap-2 items-center"
          >
            {" "}
            <FaCheck color="#3fb89a" /> Market-leading researce
          </li>
        </ul>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2000">
          <button className="md:px-6 px-2 py-2  bg-[#cef7ec] font-bold hover:bg-[#398572] hover:text-white hover:scale-110 transition-transform text-[#3fb89a]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
