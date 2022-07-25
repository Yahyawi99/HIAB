// Css
import homeStyles from "../styles/home.module.css";
// Components
import Services from "../components/services";
import Intro from "../components/intro";
import Quotes from "../components/quote";
import About from "../components/about";
import Contact from "../components/contact";
// import Map from "../components/map";
import Footer from "../components/footer";
// context
import { useGlobal } from "../context";

const Home = () => {
  const { sectionsRef } = useGlobal();

  return (
    <article ref={sectionsRef} className={homeStyles.home}>
      <Intro />

      <Services />

      <Quotes />

      <About />

      <Contact />

      {/* <Map/> */}

      <Footer />
    </article>
  );
};

export default Home;
