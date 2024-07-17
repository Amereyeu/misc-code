
/*********************************************
 * services component
 *********************************************/

import { useState } from "react";
import { motion } from "framer-motion";
import servicesItems from "../../data/services";
import Icon from "../../svg/Icon";

function Services() {
  const [data] = useState(servicesItems);

  const fadeIn = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
    },
  };

  const list = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="services-wrap">
      <motion.div
        className="services"
        initial="hidden"
        animate="visible"
        variants={list}>
        {data.map((service, i) => (
          <motion.div
            className="services__item"
            key={i}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{
              duration: 1,
              delay: i * 0.5,
            }}>
            <Icon id={service.icon} />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a href="/sluzby">Learn more</a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
