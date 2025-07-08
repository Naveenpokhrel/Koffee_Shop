import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import ServicesSection from "./components/pages/services/page";
import About from "./components/pages/about/page";
import FancyCoffeeMenu from "./components/menu";
import Contact from "./components/pages/contact/page";


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <ServicesSection />
      <FancyCoffeeMenu />
      <Contact />
    </main>
  );
}
