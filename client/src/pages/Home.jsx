

import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Objective from "../components/Objective.jsx";
import Reviews from "../components/Reviews.jsx";

const Home = () => {
  return (
    <div className="pt-16">

      <Hero />
      <Objective />
      <Reviews />
      <About />
      <Footer />

    </div>
  );
};

export default Home;