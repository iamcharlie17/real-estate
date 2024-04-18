import { FaUsers } from "react-icons/fa";

const JoinAgent = () => {
  return (
    <div className="md:p-16 ">
      <div className="lg:w-2/3 mx-auto p-4 md:p-16  bg-[#cef7ec] rounded-lg flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row text-center md:text-start gap-2 items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="p-4 bg-white rounded-full"
          >
            <FaUsers color="#3fb89a" size={30} />
          </div>
          <div>
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-3xl font-semibold"
            >
              Become an Agent
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Agent hen an unknown printer took a galley scramble
            </p>
          </div>
        </div>
        <div>
          <button
            data-aos="fade-left"
            data-aos-duration="1000"
            className="btn text-white bg-[#3fb89a] px-6 hover:bg-[#398572]"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinAgent;
