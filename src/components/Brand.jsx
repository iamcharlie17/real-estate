const Brand = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center px-8 md:px-16 py-8   text-center lg:text-start">
      <div className="space-y-2 md:w-1/2 lg:w-full">
        <h1 
        data-aos="fade-right"
        data-aos-duration='1000'
        className="text-xl text-[#3fb89a] font-bold">Our Clients</h1>
        <h1 
        data-aos="fade-right"
        data-aos-duration='1000'
        data-aos-delay='300'
        className="text-3xl font-bold">
          We are going to became partners for the long run
        </h1>
        <p
        data-aos="fade-right"
        data-aos-duration='1000'
        data-aos-delay='600'
        >
          <small>
            Ghen an unknown printer took a galley of type andscr ambledit to
            make a type specimen book has survived not only five centuries but
            also.
          </small>
        </p>
      </div>
      <div className="grid md:gap-8 md:grid-cols-3 grid-cols-2 gap-4  p-2 md:p-16">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="w-full  grayscale hover:grayscale-0 transition-transform hover:shadow-lg hover:shadow-green-200 hover:scale-110"
          src="https://i.ibb.co/BZtnhHV/brand1.jpg"
          alt=""
        />

        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          className="w-full  grayscale hover:grayscale-0 transition-transform hover:shadow-green-200 hover:shadow-lg hover:scale-110"
          src="https://i.ibb.co/kywNJrg/brand2.jpg"
          alt=""
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
          className="w-full grayscale hover:grayscale-0 transition-transform hover:shadow-green-200 hover:shadow-lg hover:scale-110"
          src="https://i.ibb.co/k9gpkcb/brand3.jpg"
          alt=""
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          className="w-full grayscale hover:grayscale-0 transition-transform hover:shadow-green-200 hover:shadow-lg hover:scale-110"
          src="https://i.ibb.co/ggVYgMB/brand4.jpg"
          alt=""
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          className="w-full grayscale hover:grayscale-0 transition-transform hover:shadow-green-200 hover:shadow-lg hover:scale-110"
          src="https://i.ibb.co/Gk5535P/brand5.jpg"
          alt=""
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
          className="w-full grayscale hover:grayscale-0 transition-transform hover:shadow-green-200 hover:shadow-lg hover:scale-110"
          src="https://i.ibb.co/RPwm5R7/brand6.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Brand;
