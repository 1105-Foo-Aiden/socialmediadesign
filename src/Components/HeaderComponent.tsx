import React from "react";
import ToggleComponent from "./ToggleComponent";

export default function HeaderComponent() {
  return (
    <>
      <header className="grid items-center space-between grid-rows-1 sm:grid-rows-2 grid-cols-2">
        <div>
          <h1 className="font-bold text-2xl text-slate-800 dark:text-white">
            Social Media Dashboard
          </h1>
          <p className="text-slate-600 font-bold dark:text-slate-400">Total Followers: 23,004</p>
        </div>
        <div className="lg:hidden"></div>
        <ToggleComponent/>
      </header>
    </>
  );
}
