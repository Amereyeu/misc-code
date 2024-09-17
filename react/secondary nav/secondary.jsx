/*********************************************
 * secondary navigation on screen
 *********************************************/
import { motion } from "framer-motion";
import { useState } from "react";
import { CiFacebook, CiInstagram, CiShoppingCart } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

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

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: 15,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };

  const Option = ({ href, Icon, setOpen, setGoTop }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => {
          setOpen(false);
          setGoTop(true);
        }}
      >
        <div className="secondary-navigation__list__item">
          <motion.a href={href} target="_blank" variants={actionIconVariants}>
            <Icon />
          </motion.a>
        </div>
      </motion.li>
    );
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
