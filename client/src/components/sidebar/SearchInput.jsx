import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversations();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 chracters long", {
        duration: 2000,
      });
    }

    // Search algorithm to search user
    const conversations = conversation.find((e) =>
      e.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (conversations) {
      setSelectedConversation(conversations);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };
  return (
    <form onSubmit={handleOnSubmit} className="w-full flex items-center gap-3">
      <input
        className="flex h-10 w-full rounded-xl border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="search"
        placeholder="Search For your ❤️"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="p-2 rounded-full bg-sky-400 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
