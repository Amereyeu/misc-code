
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import productsItems from "../../data/products";

function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["75%", "-100%"]);

  return (
    <div className="horizontal-wrap">
      <div ref={targetRef} className="horizontal">
        <div className="horizontal__inner">
          <motion.div style={{ x }} className="horizontal__inner__items">
            {productsItems.map((card) => {
              return (
                <div key={card.id} className="horizontal__inner__items__item">
                  <div
                    style={{
                      backgroundImage: `url(images/${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="bgimage"
                  ></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
