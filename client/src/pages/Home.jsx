import About from "../components/About.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Objective from "../components/Objective.jsx";
import Reviews from "../components/Reviews.jsx";
import Stats from "../components/Stats.jsx";

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Stats />
      <Objective />
      <HowItWorks />
      <Reviews />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
