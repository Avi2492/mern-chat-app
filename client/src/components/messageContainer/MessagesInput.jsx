import React from "react";
import { GrSend } from "react-icons/gr";

function MessagesInput() {
  const handleSubmit = async (e) => {};
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-gray-700 text-white"
          placeholder="Type your Message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 rounded-full"
        >
          <GrSend className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
}

export default MessagesInput;
