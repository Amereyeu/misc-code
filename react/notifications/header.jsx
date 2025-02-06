
import { motion } from "framer-motion";

function Header({ isOpen, onClose }) {
  const variants = {
    open: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    closed: {
      y: 60,
      scale: 0.8,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="header"
      variants={variants}
      initial={isOpen ? "open" : "closed"}
      animate={isOpen ? "open" : "closed"}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 50,
        delay: isOpen ? 0.2 : 0,
      }}
    >
      <motion.h2 className="header__title">Notifications</motion.h2>

      <motion.div
        className="header__close"
        whileHover={{
          backgroundColor: "var(--hue-4)",
        }}
        onClick={onClose}
      >
        Close
      </motion.div>
    </motion.div>
  );
}

export default Header;
