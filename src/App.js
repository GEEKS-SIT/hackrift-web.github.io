import Footer from "./components/footers/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./containers/about/About";
import Hero from "./containers/Hero/Hero";
import Prizes from "./containers/prizes/Prizes";
import Schedule from "./containers/schedule/Schedule";
import Sponsors from "./containers/sponsors/Sponsors";
import FAQ from "./containers/faq/FAQ";
import ScrollTopButton from "./components/scrollTopButton/ScrollTopButton";

function App() {
  return (
    <>
      <div className="bg-beige flex flex-col justify-between max-w-[1140px] mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Schedule />
        <Prizes />
        <Sponsors />
        <FAQ />
      </div>
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
