/*********************************************
 * image animating sequence
 *********************************************/

import { motion } from "framer-motion";
import { useState } from "react";

import imageItems from "./gallery";

function ImageAnimation() {
  const [data] = useState(imageItems);

  const rotation = [10, -20, -5, 5, -20, 10];

  const imageVariants = {
    initial: () => ({
      scale: 0,
    }),
    animate: (i) => ({
      scale: 1,
      rotate: rotation[i],
    }),
    transition: (i) => ({
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 360,
      damping: 20,
    }),
  };

  return (
    <motion.div className="image-animation-wrap">
      {data.map((item, i) => (
        <motion.img
          src={item}
          alt={i}
          className="image"
          key={i}
          initial={imageVariants.initial()}
          animate={imageVariants.animate(i)}
          transition={imageVariants.transition(i)}
        />
      ))}
    </motion.div>
  );
}

export default ImageAnimation;

