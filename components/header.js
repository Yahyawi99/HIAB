// Css
import headerStyles from "../styles/header.module.css";
// useContext
import { useGlobal } from "../context";

const Header = () => {
  const {
    nav,
    setNav,
    headerStyle,
    scrollToSection,
    headerRef,
    navRef,
    showNav,
    hideNav,
  } = useGlobal();

  return (
    <header ref={headerRef} style={headerStyle} className={headerStyles.header}>
      <h1 className={headerStyles.logo}>
        <span>H</span>iab
      </h1>

      <nav className={headerStyles.nav} ref={navRef}>
        <ul
          className={headerStyles.links}
          onClick={(e) => {
            const value = e.target.dataset.value;
            if (value) {
              setNav(value);
              scrollToSection(value);
            }
          }}
        >
          <li
            data-value="Home"
            className={`${nav === "Home" && headerStyles.clicked}`}
          >
            Home
          </li>

          <li
            data-value="Services"
            className={`${nav === "Services" && headerStyles.clicked}`}
          >
            Services
          </li>

          <li
            data-value="About"
            className={`${nav === "About" && headerStyles.clicked}`}
          >
            About
          </li>

          <li
            data-value="Contact"
            className={`${nav === "Contact" && headerStyles.clicked}`}
          >
            Contact
          </li>

          <a href="tel:+49 1525 6823 059">
            <button type="button" className={headerStyles.callBtnTwo}>
              Call Now
            </button>
          </a>

          {/* Close Icon */}
          <div className={headerStyles.closeIcon} onClick={hideNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
          </div>
        </ul>
      </nav>

      <a href="tel:+49 1525 6823 059">
        <button type="button" className={headerStyles.callBtn}>
          Call Now
        </button>
      </a>

      {/* Hamburger Icon */}
      <div className={headerStyles.hamIcon} onClick={showNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
