// context
import { useGlobal } from "../context";
// CSS
import contactStyles from "../styles/contact.module.css";
// component
import Loader from "./loader";

const Contact = () => {
  const {
    submitHandler,
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage,
    loading,
    Msg,
    error,
    isSent,
  } = useGlobal();

  return (
    <section data-name="Contact" className={contactStyles.contact}>
      <h1 className={`${contactStyles.title} hide`}>Contact</h1>

      <div className={contactStyles.container}>
        <div className={contactStyles.info}>
          <h2 className={`${contactStyles.subTitle} hide`}>
            Let's work together
          </h2>
          <p className="hide">26 AV MERS SULTAN ETG 1 APPT 3, Casablanca</p>
          <p className="hide">a.hamoumi@hiab.ma</p>
          <p className="hide">Tel : +49 1525 6823 059</p>
        </div>

        <form
          className={`${contactStyles.form} ${
            loading && contactStyles.loadingForm
          }  hide`}
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="nameControle">
            <label htmlFor="Full Name">
              Full Name <span>*</span>
            </label>
            <input
              type="text"
              name="Full Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className="emailControle">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="messageControle">
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              name="message"
              cols="30"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            ></textarea>
          </div>

          <button
            className={contactStyles.submitBtn}
            type={loading ? "button" : "submit"}
          >
            {loading ? <Loader /> : "Send"}
          </button>
          {/* error message */}
          {error && <p className={contactStyles.errorMsg}>{Msg}</p>}

          {/* sent message */}
          {isSent && <p className={contactStyles.sentMsg}>{Msg}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
