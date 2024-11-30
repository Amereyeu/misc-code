
/*********************************************
 * Gradient overlay with single color
 *********************************************/
import { motion } from "framer-motion";

function GradientSolid() {
  const STATIC_COLOR = "#39f";

  const backgroundImage = `radial-gradient(125% 125% at 50% 0%, transparent 50%, ${STATIC_COLOR})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="gradient"
    ></motion.section>
  );
}

export default GradientSolid;
