import { useState, useEffect } from "react";
// import { IoIosSwap } from "react-icons/io";
import { RiArrowUpSLine, RiHome4Fill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

function SecondaryNavigation({ handleThemeChange }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  return (
    <div className="secondary-nav">
      <div
        className={`secondary-nav__trigger ${isNavOpen ? "is-open" : ""}`}
        style={{ display: showScroll ? "flex" : "none" }}
        onClick={toggleNavigation}></div>

      <nav>
        <ul className={`${isNavOpen ? "is-visible" : ""}`}>
          <li>
            <HashLink
              to="/#top"
              smooth
              className="secondary-nav__item"
              onClick={toggleNavigation}>
              <RiHome4Fill />
            </HashLink>
          </li>

          <li>
            <HashLink
              to="#top"
              smooth
              className="secondary-nav__item"
              onClick={toggleNavigation}>
              <RiArrowUpSLine />
            </HashLink>
          </li>

          {/* <li>
            <div
              className="secondary-nav__item"
              onClick={() => {
                handleThemeChange();
                toggleNavigation();
              }}>
              <IoIosSwap />
            </div>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default SecondaryNavigation;


