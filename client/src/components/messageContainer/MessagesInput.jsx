import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import useSentMessage from "../../hooks/useSentMessage";

function MessagesInput() {
  const [message, setMessage] = useState("");
  const { isLoading, sendMessage } = useSentMessage();
  const handleSubmit = async (e) => {
    e.prevebtDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-gray-700 text-white"
          placeholder="Type your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 rounded-full"
        >
          {isLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <GrSend className="h-6 w-6 text-gray-300" />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessagesInput;
