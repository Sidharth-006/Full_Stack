import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-white">
          JWT Auth App
        </h1>

        <div className="flex gap-6 text-white font-medium">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="hover:text-yellow-300 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="hover:text-yellow-300 transition"
          >
            Signup
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-yellow-300 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="hover:text-yellow-300 transition"
          >
            Profile
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;