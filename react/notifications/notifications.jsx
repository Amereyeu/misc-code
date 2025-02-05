import { motion } from "framer-motion";
import { useState } from "react";

import Header from "./Header";
import Notification from "./Notification";
import notificationItems from "./notifications";

function Notifications() {
  const [data] = useState(notificationItems);

  const [isOpen, setIsOpen] = useState(false);

  const stackVariants = {
    open: {
      y: 20,
      scale: 0.9,
      cursor: "pointer",
    },
    closed: {
      y: 0,
      scale: 1,
      cursor: "default",
    },
  };

  return (
    <motion.div
      className="notifications-wrap"
      variants={stackVariants}
      initial={isOpen ? "open" : "closed"}
      animate={isOpen ? "open" : "closed"}
      transition={{
        type: "spring",
        mass: 0.7,
      }}
    >
      <Header isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {data.map((item, i) => (
        <Notification
          key={i}
          index={i}
          isOpen={isOpen}
          item={item}
          zindex={data.length}
          onClick={() => {
            setIsOpen((open) => !open);
          }}
        />
      ))}
    </motion.div>
  );
}

export default Notifications;
