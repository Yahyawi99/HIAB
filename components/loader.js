import loaderStyles from "../styles/loader.module.css";

const Loader = () => {
  return (
    <section className={loaderStyles.holder}>
      <div className={loaderStyles.preloader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loader;
