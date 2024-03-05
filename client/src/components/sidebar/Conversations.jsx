import React from "react";
import Contacts from "./Contacts";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

function Conversations() {
  const { isLoading, conversation } = useGetConversations();
  console.log(conversation);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversation.map((conversations, index) => (
        <Contacts
          key={conversations._id}
          conversations={conversations}
          emoji={getRandomEmoji()}
          lastIndex={index === conversation.length - 1}
        />
      ))}
      {isLoading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}

export default Conversations;
