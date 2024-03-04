import React from "react";

function Contacts() {
  return (
    <>
      <div className="flex gap-4 items-center hover:bg-green-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://media.istockphoto.com/id/1204794251/photo/young-beautiful-brunette-businesswoman-wearing-casual-sweater-and-glasses-standing-looking.jpg?s=612x612&w=0&k=20&c=dlQb4s6DpuMemxQdypd9WovaRr5CwBO7WNrj8LyyUto="
              alt="user-img"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-300">Nikita Tayal</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
}

export default Contacts;
