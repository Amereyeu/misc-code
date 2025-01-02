
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function Paragraph({ value }) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  return (
    <motion.p
      className="text-reveal"
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  );
}

export default Paragraph;
