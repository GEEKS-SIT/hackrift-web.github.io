import Footer from "./components/footers/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./containers/about/About";
import Hero from "./containers/Hero/Hero";
import Prizes from "./containers/prizes/Prizes";
import Schedule from "./containers/schedule/Schedule";
import Sponsors from "./containers/sponsors/Sponsors";
import FAQ from "./containers/faq/FAQ";
import ScrollTopButton from "./components/scrollTopButton/ScrollTopButton";
import scrollbar from "./scrollbar.js";

function App() {
  return (
    <>
      <div className="bg-beige flex flex-col justify-between">
        <div className="max-w-[1140px] mx-auto">
          <Navbar />
        </div>

        <div className="max-w-8xl mx-auto">
          <Hero />
        </div>

        <div className="max-w-[1140px] mx-auto">
          <About />
          <Schedule />
          <Prizes />
          <Sponsors />
          <FAQ />
        </div>
      </div>
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
