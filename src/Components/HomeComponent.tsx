import React from "react";
import CardComponent from "./CardComponent";
import ToggleComponent from "./ToggleComponent";
import HeaderComponent from "./HeaderComponent";
import OverviewComponent from "./OverviewComponent";

export default function HomeComponent() {
  return (
    <>
      <div className="bg-slate-100 dark:bg-slate-800 absolute w-full h-52 -z-10"></div>
        
        <section className="p-8 max-w-7xl container mx-auto">
          <HeaderComponent />
          <CardComponent />
          <OverviewComponent />
        </section>
    </>
  );
}
