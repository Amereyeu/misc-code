import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNavigation = () => {
    const body = document.getElementById("body");
    setIsNavOpen((prevState) => !prevState);
    body.classList.toggle("fixed_body");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navigation-container ${isSticky ? "sticky" : ""}`}>
      <div className="navigation">
        <div className="row">
          <h1 className="navigation__logo">Company Logo</h1>

          <div
            className={`navigation__toggle ${isNavOpen ? "open" : ""}`}
            onClick={toggleNavigation}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navigation__menu ${isNavOpen ? "collapse" : ""}`}>
          <Link
            to="/"
            className="navigation__menu__item"
            onClick={toggleNavigation}>
            <button>Tech</button>
          </Link>

          <Link
            to="/recipes"
            className="navigation__menu__item"
            onClick={toggleNavigation}>
            <button>Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

