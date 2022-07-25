// CSS
import footerStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <section className={footerStyles.footer}>
      <p> &copy; {new Date().getFullYear()} HIAB , All Rights Reserved</p>
    </section>
  );
};

export default Footer;
