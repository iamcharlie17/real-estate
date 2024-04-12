import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen py-32 mx-2">
      <div className=" hover:scale-105 transition-transform w-full mx-auto  max-w-md p-8 space-y-3 rounded-xl bg-[#3fb89a] text-white shadow-xl shadow-blue-400">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-md  text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Photo URL
            </label>
            <input
              type="text"
              name="photo-url"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 rounded-md  text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block ">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-md  text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md  text-gray-100 focus:border-violet-400"
            />
            <div className="flex justify-end text-xs ">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white font-bold bg-[#0A4781]">
            Register
          </button>
        </form>
        <p className="text-xs text-center sm:px-6">
          Already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            href="#"
            className="underline text-gray-100 text-[#0A4781]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
