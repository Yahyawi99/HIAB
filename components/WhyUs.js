import React from "react";
import Image from "next/image";
// css
import whyStyles from "../styles/whyUs.module.css";

const WhyUs = () => {
  return (
    <section className={whyStyles.container}>
      <div>
        <h2>
          Why is <span>HIAB</span> your right partner?{" "}
        </h2>

        <div className={whyStyles.image}>
          <Image
            src="/images/why-us large.jpg"
            width="100"
            height="100"
            layout="responsive"
          />
        </div>

        <p>
          HIAB offers, through a long successful practical experience and a
          close customer relationship, a promising marketing and sales services
          in the MEA sales area and accompanies you in the acquisition phase,
          offer preparation, contract negotiations, realization period up to a
          prosperous completion of your project.
        </p>
      </div>

      <div className={whyStyles.image}>
        <Image
          src="/images/why-us large.jpg"
          width="100"
          height="100"
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default WhyUs;
