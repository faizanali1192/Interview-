import Header from "./components/Header";
import "./app.css";
import Hero from "./components/Hero/Hero";
import InnerHero from "./components/innerHero/InnerHero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Trade from "./components/Trade/Trade";
import Slider from "./components/Slider/Slider";
import ChooseUs from "./components/ChooseUs/ChooseUs";
function App() {
  return (
    <>
      <Header />
      <Hero />

      <InnerHero />
      <About />
      <Trade />
      <Slider />
      <ChooseUs />
      <Footer />
    </>
  );
}

export default App;
