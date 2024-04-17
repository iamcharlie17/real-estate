import { Link, NavLink } from "react-router-dom";
import { SiHomeadvisor } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../providers/FirebaseProvider";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut()
      .then(() =>
        toast("Logged Out", {
          duration: 1500,
          style: {
            background: "#3fb89a",
            color: "white",
          },
        })
      )
      .catch((e) => console.log(e.message));
  };

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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0A4781] rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2 relative hover:scale-110 transition-transform">
          <SiHomeadvisor
            size={80}
            className="text-[#3fb89a] -top-4 -left-4 z-0"
          />
          <Link to="/" className="font-bold text-3xl ">
            <h1 className="z-10 absolute top-5 left-4">
              Home<span className="text-[#3fb89a]">Harbor</span>
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end mr-4 ">
        {/* dynamic login and profile */}
        {user ? (
          <details className="dropdown dropdown-end">
            <summary
              className="btn bg-[#3fb89a] border-none rounded-full px-2 hover:bg-[#398572] tooltip flex"
              data-tip="Profile"
            >
              <CgProfile size={30} color="white" />
            </summary>
            <div className="p-4 shadow menu dropdown-content z-[1] bg-[#3fb89a] rounded-box w-80 space-y-8">
              <div className="text-center space-y-2">
                <div className="">
                  {user.photoURL ? (
                    <img className="w-1/3 mx-auto" src={user.photoURL} alt="" />
                  ) : (
                    <button className="rounded-full px-3 border-2 text-6xl font-bold bg-white text-[#3fb89a]">
                      {user.email.substring(0, 1).toUpperCase()}
                    </button>
                  )}
                </div>
                <div className="font-bold h-24">
                  {user.displayName && <h1>Name: {user.displayName}</h1>}
                  {user.email && <h1>Email: {user.email}</h1>}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleLogOut}
                  className="block w-full p-1 text-center rounded-sm text-white font-bold bg-[#0A4781]"
                >
                  Log Out
                </button>
                <Link
                  to="/update-profile"
                  className="flex items-center justify-center w-full p-1 text-center  rounded-sm text-white font-bold bg-[#0A4781]"
                >
                  <button>Update Profile</button>
                </Link>
              </div>
            </div>
          </details>
        ) : (
          <Link to="login">
            <button className="md:px-6 px-2 py-2  bg-[#3fb89a] font-bold hover:bg-[#398572] hover:scale-110 transition-transform">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
