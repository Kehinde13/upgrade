import Aboutus from "@/components/Aboutus";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Partners from "@/components/Partners";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <div>
      <div className=" bg-customPattern">
        <NavBar />
        <Hero />
      </div>
      <Partners />
      <Aboutus />
      <Featured />
      <Trust />
    </div>
  );
}
