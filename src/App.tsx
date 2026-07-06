import Header from "./components/Header";
import Hero from "./components/Hero";
import Difference from "./components/Difference";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Video from "./components/Video";
import WhyRestore from "./components/WhyRestore";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCallBar from "./components/StickyCallBar";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy font-sans pb-16 md:pb-0">
      <Header />
      <Hero />
      <Difference />
      <About />
      <Services />
      <Gallery />
      <Video />
      <WhyRestore />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCallBar />
    </div>
  );
}
