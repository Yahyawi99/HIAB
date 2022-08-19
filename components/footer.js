// CSS
import footerStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <section className={footerStyles.footer}>
      <p>HIAB &copy;{new Date().getFullYear()}. All Rights Reserved</p>
    </section>
  );
};

export default Footer;
