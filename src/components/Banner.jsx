import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/FirebaseProvider";
import toast from "react-hot-toast";

const Banner = () => {
  const { user } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    toast("Already logged in", {
      duration: 1500,
      style: {
        background: "#3fb89a",
        color: "white",
      },
    });
  };
  return (
    <div
      className="hero min-h-screen banner"
      style={{
        backgroundImage: "url(https://i.ibb.co/M7cc62w/real-estate-banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Discover Your <br /> Dream Home Today!
          </h1>
          <p data-aos="fade-left" data-aos-duration="1000" className="mb-5">
            Explore a curated selection of stunning residential properties
            tailored to your lifestyle. Find the perfect space that feels like
            home.
          </p>
          <div data-aos="fade-up" data-aos-duration="1000">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow w-full" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-50"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="mt-10 ">
            {user ? (
              <Link to="/">
                <button
                  data-aos="zoom-in"
                  data-aos-duration ="1000"
                  data-aos-delay = "500"
                  data-aos-easing="ease-in-out"
                  onClick={handleLogIn}
                  className=" w-1/5 md:w-1/4 md:px-6 py-2 mr-6 bg-[#3fb89a] font-bold hover:bg-[#398572] hover:scale-110 transition-transform"
                >
                  Login
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button 
                data-aos="zoom-in"
                data-aos-duration ="1000"
                data-aos-delay = "500"
                data-aos-easing="ease-in-out"
                className=" w-1/5 md:w-1/4 md:px-6 py-2 mr-6 bg-[#3fb89a] font-bold hover:bg-[#398572] hover:scale-110 transition-transform">
                  Login
                </button>
              </Link>
            )}
            <Link to="/register">
              <button
              data-aos="zoom-in"
              data-aos-duration ="1000"
              data-aos-delay = "500"
              data-aos-easing="ease-in-out"
              className=" w-1/4 md:px-6 py-2  bg-[#3fb89a] font-bold hover:bg-[#398572] hover:scale-110 transition-transform">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
