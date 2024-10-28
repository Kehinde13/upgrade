import Aboutus from "@/components/Aboutus";
import CallToAction from "@/components/CallToAction";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <div>
      <div className="bg-customPattern">
        <NavBar />
        <Hero />
      </div>
      <Partners />
      <Aboutus />
      <Featured />
      <Trust />
      <Services />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}
