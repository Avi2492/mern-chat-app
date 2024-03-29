import { useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";

function useSentMessage() {
  const [isLoading, setIsLoading] = useState(false);

  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { sendMessage, isLoading };
}

export default useSentMessage;
