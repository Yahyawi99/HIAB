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
              src="/icons/investing.svg"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>

          <h3 className={`${servicesStyles.serviceName} hide`}>
            Financing Service
          </h3>

          <p className={`${servicesStyles.serviceDesc} hide`}>
            Do you want to invest and realize an industrial project? Are you
            looking for the best funding for your project?
            <br />
            HIAB and his partner from Germany with decades of industry
            skillfulness, financing expertise and trading experience are your
            right partner who can lead you by the efficient and optimal
            technical and financial structuring of your project.
          </p>
        </div>

        <div className={servicesStyles.service}>
          <div className={`${servicesStyles.icon} hide`}>
            <Image
              src="/icons/sales.svg"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>

          <h3 className={`${servicesStyles.serviceName} hide`}>
            Successful sales for machine and plant manufacturing
          </h3>

          <p className={`${servicesStyles.serviceDesc} hide`}>
            Due to the numerous market changes as well as competition from
            low-cost countries, which is becoming stronger not only due to lower
            prices, but increasingly also due to continuous quality
            improvements, German machine and plant manufacturers are faced with
            the challenge of evolution and economic efficiency and thus their
            long-term success
          </p>
        </div>
      </section>
    </article>
  );
};

export default Services;
