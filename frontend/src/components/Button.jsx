const Button = ({ text, type = "button" }) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
    >
      {text}
    </button>
  );
};

export default Button;