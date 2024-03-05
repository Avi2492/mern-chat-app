import React from "react";
import MessageComponent from "./MessageComponent";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkelton from "../skeltons/MessageSkelton";

function Messages() {
  const { messages, isLoading } = useGetMessages();
  console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!isLoading &&
        messages.length > 0 &&
        messages.map((message, idx) => (
          <MessageComponent key={idx} message={message} />
        ))}
      {isLoading && [...Array(3)].map((_, idx) => <MessageSkelton key={idx} />)}

      {/* Start Message Line */}
      {!isLoading && messages.length === 0 && (
        <p className="text-center items-center flex justify-center">
          Send a Message to Start Conversation
        </p>
      )}
    </div>
  );
}

export default Messages;
