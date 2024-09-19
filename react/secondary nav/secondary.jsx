/*********************************************
 * secondary navigation on screen
 *********************************************/
import { motion } from "framer-motion";
import { useState } from "react";
import { CiFacebook, CiInstagram, CiShoppingCart } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

import Option from "./Option";

function SecondaryNavigation() {
  const [open, setOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [goTop, setGoTop] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 500) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 500) {
      setShowScroll(false);
    }
  };

  if (goTop === true) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setGoTop(false);
  }

  window.addEventListener("scroll", checkScrollTop);

  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="secondary-navigation">
      <div
        onClick={() => setOpen((prevState) => !prevState)}
        className={`secondary-navigation__button ${open ? "open" : ""}`}
        style={{ display: showScroll ? "flex" : "none" }}
      ></div>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "bottom" }}
        className="secondary-navigation__list"
      >
        <Option setOpen={setOpen} setGoTop={setGoTop} Icon={IoIosArrowUp} />

        <Option
          setOpen={setOpen}
          setGoTop={setGoTop}
          Icon={CiFacebook}
          href="#"
        />

        <Option
          setOpen={setOpen}
          setGoTop={setGoTop}
          Icon={CiInstagram}
          href="#"
        />

        <Option
          setOpen={setOpen}
          setGoTop={setGoTop}
          Icon={CiShoppingCart}
          href="#"
        />
      </motion.ul>
    </motion.div>
  );
}

export default SecondaryNavigation;
