import React from "react";
import Logo from "../../components/logo/Logo";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="gap-2">
          <h1 className="text-xl font-semibold text-center text-gray-300 mb-4 italic">
            Unlock Love Login to Your Destiny
          </h1>
          <span className="mt-4">
            <Logo />
          </span>
        </div>

        <form className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Username{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter your username 🥰"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>
                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black hover:underline"
                >
                  {" "}
                  Forgot password?{" "}
                </a>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Enter your password 🙈"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-sm text-gray-300 ">
              Don&apos;t have an account?{" "}
              <Link
                to={"/signup"}
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 gap-2"
              >
                Start Your Journey! <span>❤️</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
