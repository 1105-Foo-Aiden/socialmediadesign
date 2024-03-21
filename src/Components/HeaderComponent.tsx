import React from "react";
import ToggleComponent from "./ToggleComponent";

export default function HeaderComponent() {
  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl text-slate-800">
            Social Media Dashboard
          </h1>
          <p className="text-slate-600 font-bold">Total Followers: 23,004</p>
        </div>
      </header>
    </>
  );
}
