import { useEffect, useRef } from "react";
import MessageComponent from "./MessageComponent";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkelton from "../skeltons/MessageSkelton";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
  const { messages, isLoading } = useGetMessages();
  useListenMessages();

  // Automatic scroll when msg send
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!isLoading &&
        messages.length > 0 &&
        messages.map((message, idx) => (
          <div key={idx} ref={lastMessageRef}>
            <MessageComponent message={message} />
          </div>
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
