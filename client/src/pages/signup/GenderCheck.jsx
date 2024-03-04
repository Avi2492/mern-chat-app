import React from "react";

function GenderCheck({ onCheckboxChange, selectedGender }) {
  return (
    <>
      <div className="flex gap-4">
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            <span className={`label-text text-gray-300`}>👨‍🦰 Him</span>
            <input
              type="checkbox"
              className="checkbox border-slate-400"
              checked={selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
            />
          </label>
        </div>
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer ${
              selectedGender === "female" ? "selected" : ""
            }`}
          >
            <span className="label-text text-gray-300">👩‍🦰 Her </span>
            <input
              type="checkbox"
              className="checkbox border-slate-400"
              checked={selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default GenderCheck;
