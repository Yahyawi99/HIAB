// CSS
import quoteStyles from "../styles/quote.module.css";

const Quotes = () => {
  return (
    <section data-name="About" className={quoteStyles.quoteContainer}>
      <blockquote className={`${quoteStyles.quote} hide`}>
        &quot; You are surrounded by simple, obvious solutions that can
        dramatically increase your income, power, influence and success. The
        problem is, you just don’t see them. &quot;
        <br />
        <span className="hide"> – Jay Abraham</span>
      </blockquote>

      <div className={`${quoteStyles.message} hide`}>
        At{" "}
        <span>
          HIAB
          <hr />
        </span>{" "}
        we{" "}
        <span>
          fix
          <hr />
        </span>{" "}
        that problem
      </div>
    </section>
  );
};

export default Quotes;
