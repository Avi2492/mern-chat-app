import React from "react";
import MessageComponent from "./MessageComponent";

function Messages() {
  return (
    <div className="px-4 flex-1 overflow-auto">
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
    </div>
  );
}

export default Messages;
