import React from "react";

function GenderCheck() {
  return (
    <>
      <div className="flex gap-4">
        <div className="form-control">
          <label className={"label gap-2 cursor-pointer"}>
            <span className="label-text text-gray-300">👨‍🦰 Him</span>
            <input type="checkbox" className="checkbox border-slate-400" />
          </label>
        </div>
        <div className="form-control">
          <label className={"label gap-2 cursor-pointer"}>
            <span className="label-text text-gray-300">👩‍🦰 Her </span>
            <input type="checkbox" className="checkbox border-slate-400" />
          </label>
        </div>
      </div>
    </>
  );
}

export default GenderCheck;
