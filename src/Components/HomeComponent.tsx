import CardComponent from "./CardComponent";
import HeaderComponent from "./HeaderComponent";
import OverviewComponent from "./OverviewComponent";

export default function HomeComponent() {
  return (
    <>
      <div className="bg-[#f5f7ff] dark:bg-[#1f212e] absolute w-full h-56 -z-10"></div>
        
        <section className="p-8  max-w-7xl container mx-auto">
          <HeaderComponent />
          <CardComponent />
          <OverviewComponent />
        </section>
    </>
  );
}
