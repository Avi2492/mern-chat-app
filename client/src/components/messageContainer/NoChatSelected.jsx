import React from "react";
import Logo from "../logo/Logo";
import { useAuthContext } from "../../context/AuthContext";

function NoChatSelected() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullname}</p>
        <p>Select a chat to start messaging</p>
        <img
          src={authUser.profilePic}
          alt={authUser.fullname}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default NoChatSelected;
