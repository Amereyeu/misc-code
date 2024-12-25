
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Word from "./Word";

function Words({ value }) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p
      className="text-reveal"
      ref={element}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={index}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export default Words;
