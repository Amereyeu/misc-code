
import { motion } from "framer-motion";
import { useState } from "react";

import priceItems from "../../data/price";

function Tabs() {
  const [data] = useState(priceItems);
  const [activeTab, setActiveTab] = useState(data[0]);
  const isSelected = (tab) => activeTab.name === tab.name;

  const tabContent = {
    initial: {
      y: 10,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {   
      y: -10,
      opacity: 0,
    },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
    },
  };

  const handleClick = (e, tab) => {
    e.preventDefault();

    setActiveTab(tab);
  };

  return (
    <section className="pricelist-wrap" id="prices">
      <h2>Price list</h2>

      <div className="pricelist">
        <nav>
          {data.map((tab) => (
            <div
              key={tab.name}
              onClick={(e) => handleClick(e, tab)}
              className={`pricelist__tab ${isSelected(tab) ? "selected" : ""}`}
            >
              <div className="pricelist__tab__text">
                <h3>{tab.label}</h3>
              </div>
            </div>
          ))}
        </nav>

        <motion.section
          className="pricelist__content"
          key={activeTab.name || "empty"}
          variants={tabContent}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{
            duration: 0.3,
          }}
        >
          {activeTab && activeTab?.items && (
            <>
              {activeTab.items.map((item, i) => (
                <motion.div
                  className="pricelist__content__item"
                  key={i}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{
                    // duration: 1,
                    delay: i * 0.2,
                  }}
                >
                  <p>{item.text}</p>
                  <p>${item.price}</p>
                </motion.div>
              ))}
            </>
          )}
        </motion.section>
      </div>
    </section>
  );
}

export default Tabs;
