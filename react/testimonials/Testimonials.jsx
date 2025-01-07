/*********************************************
 * testimonials section with framer motion
 *********************************************/
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import testimonials from "./testimonial";

function Testimonials() {
  const [active, setActive] = useState(testimonials[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const totalLength = testimonials.length;

    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newTestimonial = testimonials[totalLength - 1];
      setActive(newTestimonial);
      return;
    }

    const newIndex = currentIndex - 1;

    const newTestimonial = testimonials.filter((item) => {
      return testimonials.indexOf(item) === newIndex;
    });

    const newItem = newTestimonial[0];
    setActive(newItem);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const totalLength = testimonials.length;

    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newTestimonial = testimonials[0];
      setActive(newTestimonial);
      return;
    }

    const newIndex = currentIndex + 1;

    const newTestimonial = testimonials.filter((item) => {
      return testimonials.indexOf(item) === newIndex;
    });

    const newItem = newTestimonial[0];
    setActive(newItem);
    setCurrentIndex(newIndex);
  };

  const randomRotate = () => Math.floor(Math.random() * 21) - 10;

  const isActive = (idx) => idx === active.id;

  return (
    <div className="testimonials-wrap">
      <div className="testimonials__images">
        <AnimatePresence>
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              className="testimonials__images__image"
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotate(),
                y: 0,
              }}
              animate={{
                opacity: isActive(idx) ? 1 : 0.7,
                scale: isActive(idx) ? 1 : 0.95,
                rotate: isActive(idx) ? 0 : randomRotate(),
                zIndex: isActive(idx) ? 999 : testimonials.length + 2 - idx,
                y: isActive(idx) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotate(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <img
                src={testimonial.src}
                height="500"
                width="500"
                alt={testimonial.name}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        key={active.id}
        className="testimonials__text"
        initial={{
          opacity: 0,
          y: -16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <h2 className="testimonials__text__header">{active.name}</h2>

        <p className="testimonials__text__title">{active.designation}</p>

        <p className="testimonials__text__text">
          {active.quote.split(" ").map((word, idx) => (
            <motion.span
              key={word + idx}
              initial={{
                Opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.05 * idx,
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </p>

        <div className="testimonials__text__arrows">
          <button onClick={handlePrev}>&lt;</button>

          <button onClick={handleNext}>&gt;</button>
        </div>
      </motion.div>
    </div>
  );
}

export default Testimonials;

