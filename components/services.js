// CSS
import servicesStyles from "../styles/services.module.css";
// Image
import Image from "next/image";

const Services = () => {
  return (
    <article data-name="Services" className={servicesStyles.services}>
      <h1 className={`${servicesStyles.sectionTitle} hide`}>Services</h1>

      <h2 className={`${servicesStyles.subTitle} hide`}>
        Taking your business to
      </h2>
      <h2 className={`${servicesStyles.subTitle} hide`}>the next level</h2>

      <section className={servicesStyles.container}>
        <div className={servicesStyles.service}>
          <div className={`${servicesStyles.icon} hide`}>
            <Image
              src="/icons/globeLocations.svg"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <h3 className={`${servicesStyles.serviceName} hide`}>
            Business Plans
          </h3>
          <p className={`${servicesStyles.serviceDesc} hide`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            voluptates veritatis sit minima debitis adipisci necessitatibus,
            magnam.
          </p>
        </div>

        <div className={servicesStyles.service}>
          <div className={`${servicesStyles.icon} hide`}>
            <Image
              src="/icons/sacOfMoney.svg"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <h3 className={`${servicesStyles.serviceName} hide`}>
            Accounting Services
          </h3>
          <p className={`${servicesStyles.serviceDesc} hide`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            voluptates veritatis sit minima debitis adipisci necessitatibus,
            magnam.
          </p>
        </div>

        <div className={servicesStyles.service}>
          <div className={`${servicesStyles.icon} hide`}>
            <Image
              src="/icons/charts.svg"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <h3 className={`${servicesStyles.serviceName} hide`}>
            Finance Optimization
          </h3>
          <p className={`${servicesStyles.serviceDesc} hide`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            voluptates veritatis sit minima debitis adipisci necessitatibus,
            magnam.
          </p>
        </div>
      </section>
    </article>
  );
};

export default Services;
