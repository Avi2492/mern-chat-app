import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
    <div className="w-full flex items-center gap-3">
      <input
        className="flex h-10 w-full rounded-xl border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="email"
        placeholder="Email"
      />
      <button type="submit" className="p-2 rounded-full bg-sky-400 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </div>
  );
}

export default SearchInput;
