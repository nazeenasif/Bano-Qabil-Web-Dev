import Navbar from "../app/components/navbar";
import Hero from "./components/hero";
import Logos from "./logos/logos";
import About from "./about/about";
import Chart from "./chart/chart";
import CTA from "./cta/cta";
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <div className="bg-[#0B0E12]">
        <Navbar/>
        <Hero/>
        <Logos/>
        <About/>
        <Chart/>
        <CTA/>
        <Footer/>
      </div>
    </>
  );
};