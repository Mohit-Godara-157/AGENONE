import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TheService from "./components/TheService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProject from "./components/OurProject";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
      <Preloader />
      <div className="bg_black headerImage d-flex flex-column position-relative z_4 h_xl_100 vh_100">
        <NavBar />
        <HeroSection />
      </div>
      <TheService />
      <OurProject />
      <CardsSection />
      <Footer />
    </>
  );
}

export default App;
