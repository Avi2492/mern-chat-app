import React from "react";
import useConversation from "../../store/useConversation";

function Contacts({ conversations, lastIndex, emoji }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversations._id;
  return (
    <>
      <div
        className={`flex gap-4 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-pink-400" : ""
        }`}
        onClick={() => setSelectedConversation(conversations)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversations.profilePic} alt="user-img" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-300">{conversations.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}

export default Contacts;
