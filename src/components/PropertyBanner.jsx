import { MdPlayCircleFilled } from "react-icons/md";

const PropertyBanner = () => {
  return (
    <div
      className="min-h-[75vh] bg-no-repeat bg-cover bg-fixed  flex justify-center "
      style={{
        backgroundImage: "url('https://i.ibb.co/mvSYdzp/property-banner.jpg')",
      }}
    >
      <div className=" w-full flex justify-center items-center">
        <div className="bg-white p-6 md:p-12 lg:w-1/2 space-y-2 flex gap-4 items-center justify-between">
          <div>
            <h1 className="text-xl text-[#3fb89a] font-semibold">
              LET’S TAKE A TOUR
            </h1>
            <h1 className="text-2xl font-semibold">
              Search Property Smarter, <br /> Quicker & Anywhere
            </h1>
            <div className="flex items-center gap-8">
              <MdPlayCircleFilled
                color="#3fb89a"
                size={50}
                className="hover:scale-110 transition-transform"
              />
              <h1 className="text-gray-400">Watch Video</h1>
            </div>
          </div>
          <div>
            <h1 className=" text-2xl hidden md:block lg:text-3xl font-mono font-semibold text-[#0A4781]">Property for all</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;
