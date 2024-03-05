import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

function MessageComponent({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const name = fromMe ? authUser.fullname : selectedConversation?.fullname;

  const bubbleColor = fromMe ? "bg-blue-400" : "bg-pink-400";

  // const time
  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt={name} src={profilePic} />
          </div>
        </div>
        <div className="chat-header gap-1">{name}</div>
        <div className={`chat-bubble text-white ${bubbleColor}`}>
          {message.message}
        </div>
        <time className="text-xs opacity-50">12:45</time>
      </div>
    </>
  );
}

export default MessageComponent;
