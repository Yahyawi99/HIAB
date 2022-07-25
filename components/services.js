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
            In an era of disruption, strategy is more important than ever. We
            offer creative solutions that have helped thousands of companies
            across all geographies and sectors develop and execute winning
            strategies
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
            Businesses rely on well-organized and accurate financial records in
            order to maintain profitability and ensure that operations will run
            more efficiently on a daily basis. Our Group helps your business get
            closer to these goals with accurate record keeping and support on
            financial issues
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
            Combining industry, category, and functional expertise, Hiab’s
            Finance Transformation team empowers the CFO and the entire Finance
            team
          </p>
        </div>
      </section>
    </article>
  );
};

export default Services;
