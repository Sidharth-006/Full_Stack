import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputField from "../components/InputField";
import Button from "../components/Button";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      const { token, user } = res.data;

      // Save token + user in AuthContext + localStorage
      login(token, user);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid Credentials");
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Login
        </h2>

        <form onSubmit={handleSubmit}>

          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />

          <Button text="Login" type="submit" />

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;