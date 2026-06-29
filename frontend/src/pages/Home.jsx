import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-slate-100 px-6">
      <div className="text-center max-w-3xl">

        <h1 className="text-5xl font-extrabold text-slate-800">
          Welcome to JWT Authentication App
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Build a secure authentication system using React,
          Node.js, Express, PostgreSQL, Sequelize and JWT.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Signup
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Home;