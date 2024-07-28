
/*********************************************
 * our services section
 *********************************************/
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import { Phone } from "./phone";

function Cta() {
  return (
    <section className="cta">
      <motion.div
        className="cta__item"
        initial={{
          opacity: 0,
          x: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2.5,
          },
        }}
        viewport={{ once: true }}
      >
        <h2>Call now</h2>

        <div className="cta__item__block">
          <Phone />
          <h3>+420 123 456 789</h3>
        </div>
      </motion.div>

      <motion.div
        className="cta__item"
        initial={{
          opacity: 0,
          x: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2.5,
          },
        }}
        viewport={{ once: true }}
      >
        <h2>Appointment</h2>

        <HashLink
          smooth
          to="/kontakt#form"
          className="cta__item__button"
          duration={50}
        >
          Make an appointment
        </HashLink>
      </motion.div>
    </section>
  );
}

export default Cta;
