import React from "react";
import SearchInput from "./SearchInput";

import AuthButton from "./AuthButton";
import Conversations from "./Conversations";

function Sidebar() {
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />

      <AuthButton />
    </div>
  );
}

export default Sidebar;
