import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useGetConversations() {
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/users");

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getConversations();
  }, []);
  return { isLoading, conversation };
}

export default useGetConversations;
