import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messageContainer/MessageContainer";

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] w-full h-full rounded-lg overflow-hidden bg-slate-800 justify-between">
      <Sidebar />

      <MessageContainer />
    </div>
  );
}

export default Home;
