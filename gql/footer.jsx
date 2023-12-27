
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import data from "../../data/nav.json";

function Footer() {
  const today = new Date();
  const [navigationData] = useState(data);

  return (
    <div className="footer-wrap">
      <footer className="footer">
        <div className="footer__logo">
          <Link to="/">
            <h1>P</h1>
          </Link>
        </div>
        <div className="footer__links">
          <ul>
            {navigationData.map((navItem, i) => (
              <li key={i}>
                <HashLink
                  smooth
                  to={navItem.to}
                  className="footer__links__item">
                  {navItem.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <p className="copy">&copy; 2008 - {today.getFullYear()} P</p>
    </div>
  );
}

export default Footer;

