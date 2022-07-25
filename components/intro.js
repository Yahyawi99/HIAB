// CSS
import introStyles from "../styles/intro.module.css";
// Context
import { useGlobal } from "../context";

const Intro = () => {
  const { titleRef, learnMore, introRef } = useGlobal();

  return (
    <section ref={introRef} data-name="Home" className={introStyles.intro}>
      <h1 ref={titleRef} className={introStyles.titleOne}>
        The perfect place to
      </h1>
      <h1 className={introStyles.titleTwo}>
        get the consulting you <span>need</span>
      </h1>

      <p className={introStyles.paragraphOne}>
        Hiab is a consulting agency in various industrial sectors. sugar
        extentions,
      </p>
      <p className={introStyles.paragraphTwo}>
        green field projects, renewable energies, and also financing in the MEA
        region
      </p>

      <button
        type="button"
        className={introStyles.learnBtn}
        onClick={learnMore}
      >
        Learn more
      </button>
    </section>
  );
};

export default Intro;
