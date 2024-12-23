import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Login = () => {
  const { handleLogin } = useUser(); // Use handleLogin for logging in
  // const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handleLogin(form.email,form.password);
      setMessage(response)
      // navigate('/')
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("An unexpected error occurred. Please try again.");
    }
    
  };

  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div className="flex flex-col items-center w-[350px] h-auto rounded-lg p-4 border shadow-lg">
        <h1 className="font-bold text-3xl mt-5 font-serif">LOGIN</h1>
        <form className="p-6 w-80" onSubmit={handleSubmit}>
          {message && <p className="text-red-500 ml-[5px]">{message}</p>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="font-serif mt- py-2 w-[235px] outline-none border-black border-b-2 pl-2 rounded-2xl"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="font-serif mt-5  py-2 w-[235px] outline-none border-black border-b-2 pl-2 rounded-2xl"
            value={form.password}
            onChange={handleChange}
            required
          />
          <NavLink className="mr-32 mt-5 text-sm text-gray-400 font-serif">
            Forget Password?
          </NavLink>
          <button
            type="submit"
            className="bg-black hover:bg-slate-500 mt-5 text-white py-2 px-5 rounded-2xl font-semibold ml-[80px]"
          >
            LOGIN
          </button>
        </form>
        <div className="flex font-serif text-sm text-gray-500">
          <p className="mt-2">Not a Member? </p>
          <NavLink to={"/Signup"}>
            <h1 className="mt-2 text-blue-600">Sign up</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;