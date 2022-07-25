// CSS
import aboutStyles from "../styles/about.module.css";
// Image
import Image from "next/image";

const About = () => {
  return (
    <article data-name="About" className={aboutStyles.about}>
      <h1 className={`${aboutStyles.aboutTitle} hide`}>About</h1>

      <h2 className={`${aboutStyles.subTitle} hide`}>Who we are</h2>

      <section className={aboutStyles.SliderContainer}>
        <div className={aboutStyles.show}>
          <div className={`${aboutStyles.aboutTxt} hide`}>
            <span>
              Abdellah El Hamoumi
              <hr className={aboutStyles.underline} />
            </span>{" "}
            is the Managing Director of the company HIAB and has more than 20
            years of experience in project management and international
            marketing and sales. He has more than 14 years of experience in the
            sugar industry with manufacturers and financial institutions on an
            international level. One of his main tasks is to establish a crucial
            link with the international actors with whom he has dealt in various
            projects. Abdellah has its strategic location in Germany and Morocco
            and operates worldwide from there. Through his international wide
            network, he provides the much-needed connection to the key players
            involved in both financing and manufacturing activities related to
            sugar and other industrial business sectors.
          </div>
          <div className={`${aboutStyles.image} hide`}>
            <Image
              src="/images/Image CEO 1.jpg"
              width="100%"
              height="100%"
              layout="responsive"
              alt="Abdellah El Hamoumi"
            />
          </div>
        </div>

        <div className={aboutStyles.show}>
          <div className={`${aboutStyles.aboutTxt} hide`}>
            <span>
              Ilyass Boussid
              <hr className={aboutStyles.underline} />
            </span>{" "}
            is the business partner and right-hand of Mr.Abdellah El Hamoumi. He
            is responsible for all administrative matters and also coordinates
            business appointments and maintains contacts in the international
            sector. He has a large network in West Africa and the Middle East.
          </div>
          <div className={`${aboutStyles.image} hide`}>
            <Image
              src="/images/Mr.Ilyas.jpeg"
              width="100"
              height="100"
              layout="responsive"
              alt="Ilyass Boussid"
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
