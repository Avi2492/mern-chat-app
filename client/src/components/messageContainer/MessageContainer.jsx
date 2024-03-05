import React, { useEffect } from "react";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";

import NoChatSelected from "./NoChatSelected";
import useConversation from "../../store/useConversation";

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="lg:w-[80%] w-[60%] flex flex-col gap-2">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-900 px-4 py-2 mb-2 gap-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-300 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>

          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;
