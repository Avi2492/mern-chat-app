import React from "react";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout.js";

function AuthButton() {
  const { isLoading, logout } = useLogout();
  return (
    <div className="py-2 text-xl font-bold cursor-pointer">
      {!isLoading ? (
        <CiLogout
          className="w-6 h-6 text-gray-300 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default AuthButton;
