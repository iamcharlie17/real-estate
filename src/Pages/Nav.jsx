import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/properties">Properties</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar py-4 bg-[#0A4781] text-white md:px-8 fixed z-10 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div>         
          <Link to='/' className="font-bold text-xl md:text-3xl ">
            <h1 className="hover:scale-110 transition-transform">Home<span className="text-[#3fb89a]">Harbor</span></h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end mr-4 ">
        {/* dynamic login and profile */}
        <Link to="login">
          <button className="px-6 py-2  bg-[#3fb89a] font-bold hover:bg-[#398572] hover:scale-110 transition-transform">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
