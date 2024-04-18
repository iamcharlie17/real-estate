// https://i.ibb.co/jDbTt5q/stats-bg.png

const Stats = () => {
  return (
    <div
      className="min-h-[90vh] bg-[#0A4781]  flex items-center justify-center bg-contain bg-no-repeat bg-bottom"
      style={{
        backgroundImage: "url('https://i.ibb.co/jDbTt5q/stats-bg.png')",
      }}
    >
      <div className="p-4 text-center text-white">
        <div className="space-y-4 ">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once ={true}
            className=" text-2xl md:text-4xl font-bold "
          >
            Real Estate by the Numbers
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once ={true}
            className="text-sm"
          >
            In 2022 things look like this percentage
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 md:mt-12 gap-8 md:gap-22 ">
          <div 
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-delay={`100`}
          data-aos-easing="ease-in-out"
          data-aos-once ={true}
          className="w-48 h-48 mx-auto  rounded-full flex items-center justify-center bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
            <div className="w-40 h-40 mx-auto  rounded-full flex items-center justify-center bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
              <div className="flex mx-auto h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#ffffff42]  to-[#0A4781] ">
                <h1 className="font-bold text-6xl md:text-5xl text-white my-4">
                  80%
                </h1>
                <h1 className="">
                  <small>Completed Property</small>
                </h1>
              </div>
            </div>
          </div>
          <div 
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-delay={`300`}
          data-aos-easing="ease-in-out"
          data-aos-once ={true}
          className="w-48 h-48 mx-auto  rounded-full flex items-center justify-center bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
            <div className="w-40 h-40 mx-auto  rounded-full flex items-center justify-center bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
              <div className="flex mx-auto h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
                <h1 className="font-bold text-6xl md:text-5xl text-white my-4">
                  27%
                </h1>
                <h1 className="">
                  <small>Property Taxes</small>
                </h1>
              </div>
            </div>
          </div>
          <div 
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-delay={`500`}
          data-aos-easing="ease-in-out"
          data-aos-once ={true}
          className="w-48 h-48 mx-auto  rounded-full flex items-center justify-center bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
            <div className="w-40 h-40 mx-auto  rounded-full flex items-center justify-center bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
              <div className="flex h-32 mx-auto w-32 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
                <h1 className="font-bold text-6xl md:text-5xl text-white my-4">
                  99%
                </h1>
                <h1 className="">
                  <small>Satisfied Customer</small>
                </h1>
              </div>
            </div>
          </div>
          <div 
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-delay={`700`}
          data-aos-easing="ease-in-out"
          data-aos-once ={true}
          className="w-48 h-48 mx-auto  rounded-full flex items-center justify-center bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
            <div className="w-40 h-40 mx-auto  rounded-full flex items-center justify-center bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
              <div className="flex mx-auto h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#ffffff42] to-[#0A4781]">
                <h1 className="font-bold text-6xl md:text-5xl text-white my-4">
                  55%
                </h1>
                <h1 className="">
                  <small>Home Ownership</small>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
