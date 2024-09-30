import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/Authprovider";

const Signin = () => {
  const { handleLogin, authInfo } = useContext(authContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    handleLogin({ username, password });
  };
  useEffect(() => {
    if (authInfo.isLoggedIn) {
      navigate("/");
    }
  }, [authInfo.isLoggedIn, navigate]);

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen flex ">
      <form
        className="bg-white  m-auto pb-20 pt-10 w-[80%] md:w-[30%] rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="w-[80%] m-auto">
          <h1 className="text-4xl text-center font-bold text-gray-800 mb-5">
            Sign In
          </h1>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="w-full mb-2 px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="w-full mb-2 px-4 py-2 mt-4 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
            {authInfo.error && (
              <span className="text-red-500 font-semibold">{authInfo.error}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
