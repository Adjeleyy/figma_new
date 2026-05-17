import Nav from "@/components/nav";
import About from "@/components/About";
import { Hero } from "@/components/hero";
import { Brands } from "@/components/Brands";
import { Consult } from "@/components/Consult";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <Brands />
      <About />
      <Consult />
      <Footer />
    </div>
  );
}
