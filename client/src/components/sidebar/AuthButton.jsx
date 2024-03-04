import React from "react";
import { CiLogout } from "react-icons/ci";

function AuthButton() {
  return (
    <div className="py-2 text-xl font-bold cursor-pointer">
      <CiLogout className="w-6 h-6" />
    </div>
  );
}

export default AuthButton;
