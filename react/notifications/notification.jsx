
import { motion } from "framer-motion";


function Notification({ index, isOpen, onClick, item, zindex }) {
  const NOTIFICATION_HEIGHT = 60;
  const NOTIFICATION_WIDTH = 280;
  const NOTIFICATION_GAP = 8;

  function getNotificationStyle(index) {
    return {
      height: NOTIFICATION_HEIGHT,
      width: NOTIFICATION_WIDTH,
      backgroundColor: `var(--hue-${index + 1})`,
      zIndex: zindex - index,
    };
  }

  const variants = {
    open: {
      y: 0,
      scale: 1,
      opacity: 1,
      pointerEvents: "auto",
      cursor: "pointer",
    },
    closed: {
      y:
        -index * (NOTIFICATION_HEIGHT + NOTIFICATION_GAP) -
        NOTIFICATION_GAP * index,
      scale: 1 - index * 0.1,
      opacity: 1 - index * 0.1,
      pointerEvents: index === 0 ? "auto" : "none",
      cursor: index === 0 ? "pointer" : "default",
    },
  };

  const notificationStyle = getNotificationStyle(index);

  return (
    <motion.div
      className="notification"
      style={notificationStyle}
      variants={variants}
      initial={isOpen ? "open" : "closed"}
      animate={isOpen ? "open" : "closed"}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 50,
        delay: index * 0.04,
      }}
      onClick={onClick}
    >
      {item}
    </motion.div>
  );
}

export default Notification;
