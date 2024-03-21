import React from "react";
import CardComponent from "./CardComponent";
import ToggleComponent from "./ToggleComponent";
import HeaderComponent from "./HeaderComponent";
import OverviewComponent from "./OverviewComponent";

export default function HomeComponent() {
  return (
    <>
      <div>
        <section className="p-8 container mx-auto">
          <HeaderComponent /> 
          <CardComponent />
          <OverviewComponent/>
        </section>
      </div>

     
    </>
  );
}
