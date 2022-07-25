import React, { useContext, useState, useEffect, useRef } from "react";
// CSS
import introStyles from "../styles/intro.module.css";
// Axios
import axios from "axios";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [nav, setNav] = useState("Home");
  const [headerStyle, setHeaderStyle] = useState({
    background: "transparent",
    color: "var(--clr-0)",
  });
  const titleRef = useRef(null);
  const sectionsRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const introRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [Msg, setMsg] = useState("");
  const [isSent, setIsSent] = useState(false);

  // Header effect
  const headerStyling = () => {
    const titleOffsetTop = titleRef.current.offsetTop;
    const headerHeight = headerRef.current.offsetHeight;
    const scrollingValue = window.scrollY + headerHeight;

    if (scrollingValue >= titleOffsetTop) {
      setHeaderStyle({
        background: "var(--clr-0)",
        color: "var(--clr-4)",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
      });
    } else {
      setHeaderStyle({
        background: "transparent",
        color: "var(--clr-0)",
      });
    }
  };

  useEffect(() => {
    headerStyling();
    linksStyling();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", headerStyling);
    window.addEventListener("scroll", linksStyling);

    return () => {
      window.removeEventListener("scroll", headerStyling);
      window.removeEventListener("scroll", linksStyling);
    };
  });

  // nav links styling on scroll
  const linksStyling = () => {
    const headerHeight = headerRef.current.offsetHeight;
    const sections = [];

    [...sectionsRef.current.children].forEach((e) => {
      if (e.offsetTop <= window.scrollY + headerHeight && e.dataset.name) {
        sections.push(e.dataset.name);
      }

      setNav(sections[sections.length - 1]);
    });
  };
  // Scroll to section
  const scrollToSection = (section) => {
    const scrollToElement = [...sectionsRef.current.children].find(
      (e) => e.dataset.name === section
    );
    const headerHeight = headerRef.current.offsetHeight;
    const display = navRef.current.style.display;

    window.scrollTo({
      top: scrollToElement.offsetTop - headerHeight,
    });

    if (display === "flex") {
      navRef.current.style.display = "none";

      document.body.style.overflow = "visible";
    }
  };

  // show and hide nav
  const showNav = () => {
    navRef.current.style.display = "flex";

    document.body.style.overflow = "hidden";
  };
  const hideNav = () => {
    navRef.current.style.display = "none";

    document.body.style.overflow = "visible";
  };

  // Learn more
  const learnMore = () => {
    const scrollToElement = [...sectionsRef.current.children].find(
      (e) => e.dataset.name === "Services"
    );
    const headerHeight = headerRef.current.offsetHeight;

    window.scrollTo({
      top: scrollToElement.offsetTop - headerHeight,
    });
  };

  // Intro slide in
  useEffect(() => {
    [...introRef.current.children].forEach((element) => {
      element.classList.add(`${introStyles.slidein}`);

      setTimeout(() => {
        element.style.transition = ".25s";
      }, 0);
    });
  }, []);

  // Scroll effect
  const scrollEffects = () => {
    const Targets = document.querySelectorAll(".hide");

    [...Targets].forEach((element) => {
      if (window.innerHeight + window.scrollY >= element.offsetTop) {
        element.classList.remove("hide");
      }
    });
  };

  useEffect(() => {
    window.onscroll = scrollEffects();
    window.addEventListener("scroll", scrollEffects);

    return () => {
      window.removeEventListener("scroll", scrollEffects);
    };
  });

  // Submit contact form
  const submitHandler = async (e) => {
    e.preventDefault();

    if (name && email && message) {
      const data = {
        name,
        email,
        message,
      };

      try {
        setLoading(true);

        await axios.post("/api/contact", data);

        sentMessage(
          `Thank you! \n We've received your message and will get back to you within 24 hours.`
        );
      } catch (e) {
        errorMessage(e.response.statusText);
      }
    } else {
      errorMessage("All fields must be added.");
    }
  };

  // Error msg
  const errorMessage = (msg) => {
    setLoading(false);

    setIsSent(false);

    setError(true);
    setMsg(msg);

    setTimeout(() => {
      setError(false);
    }, 5000);
  };

  // Sent message
  const sentMessage = (msg) => {
    setLoading(false);

    setMessage("");
    setName("");
    setEmail("");

    setError(false);

    setIsSent(true);
    setMsg(msg);

    setTimeout(() => {
      setIsSent(false);
    }, 7500);
  };

  return (
    <AppContext.Provider
      value={{
        nav,
        setNav,
        titleRef,
        headerStyle,
        sectionsRef,
        headerRef,
        scrollToSection,
        navRef,
        showNav,
        hideNav,
        learnMore,
        introRef,
        scrollEffects,
        submitHandler,
        name,
        email,
        message,
        setName,
        setEmail,
        setMessage,
        loading,
        Msg,
        isSent,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export default Provider;
