import React from "react";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";

import NoChatSelected from "./NoChatSelected";

function MessageContainer() {
  const noChatSelected = true;
  return (
    <div className="lg:w-[80%] w-[60%] flex flex-col gap-2">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-900 px-4 py-2 mb-2 gap-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-300 font-bold">Nikita Tayal</span>
          </div>

          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;
