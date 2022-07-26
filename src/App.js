import Footer from "./components/footers/Footer";
import Navbar from "./components/navbars/Navbar";
import Contact from "./containers/contact/Contact";
import About from "./containers/about/About";
import Hero from "./containers/Hero/Hero";
import Prizes from "./containers/prizes/Prizes";
import Schedule from "./containers/schedule/Schedule";
import Sponsors from "./containers/sponsors/Sponsors";

function App() {
  return (
    <div className="bg-beige flex flex-col justify-between max-w-[1140px] mx-auto">
      <Navbar />
      <main className="mx-auto px-4 sm:px-6">
        <Hero />
        <About/>
        <Schedule />
        <Prizes />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
