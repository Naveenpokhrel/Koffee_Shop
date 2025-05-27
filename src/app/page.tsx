import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import ServicesSection from "./components/pages/services/page";
import About from "./components/pages/about/page";
import CoffeeMenu from "./components/pages/menu/page";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <ServicesSection />
      <CoffeeMenu />
    </main>
  );
}
