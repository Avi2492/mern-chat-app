import React, { useState } from "react";
import Logo from "../../components/logo/Logo";
import { Link } from "react-router-dom";
import GenderCheck from "./GenderCheck";
import useSignup from "../../hooks/useSignup";

function Signup() {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  // For gender function
  const handleCheckbox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  // Hook call
  const { isLoading, signup } = useSignup();
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="gap-2">
          <h1 className="text-xl font-semibold text-center text-gray-300 mb-4 italic">
            Join the Romance Revolution!
          </h1>
          <span className="mt-4">
            <Logo />
          </span>
        </div>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="flex gap-3 justify-between">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter your fullname 😎"
                    value={inputs.fullname}
                    onChange={(e) =>
                      setInputs({ ...inputs, fullname: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">
                  {" "}
                  User Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter your username 🥰"
                    value={inputs.username}
                    onChange={(e) =>
                      setInputs({ ...inputs, username: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className=" gap-3 flex items-center justify-between">
              <div>
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>

                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Enter your password 🙈"
                    id="password"
                    value={inputs.password}
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Confirm Password{" "}
                </label>

                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Confirm your password 🤫"
                    id="confpassword"
                    value={inputs.confirmPassword}
                    onChange={(e) =>
                      setInputs({ ...inputs, confirmPassword: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            {/* Gender checkbox */}
            <GenderCheck
              onCheckboxChange={handleCheckbox}
              selectedGender={inputs.gender}
            />
            <p className="mt-2 text-center text-base text-gray-300">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  `Find Love Today 😘`
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
