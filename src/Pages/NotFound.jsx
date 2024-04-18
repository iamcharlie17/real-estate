import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <div>
        <h1 className="text-8xl font-black">404</h1>
        <h1 className="text-3xl font-semibold">OOPS</h1>
      </div>
      <Link to="/">
        <button className="btn px-4 py-2 bg-[#3fb89a] text-white">
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
