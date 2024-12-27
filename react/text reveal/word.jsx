
import { motion, useTransform } from "framer-motion";

function Word({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <span className="word">
      <span className="word__span">{children}</span>

      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export default Word;
