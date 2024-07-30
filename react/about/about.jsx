/*********************************************
 * about section
 *********************************************/
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-wrap">
      <div className="about">
        <motion.img
          className="about__image"
          src="images/engine.jpg"
          alt="office"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: true }}
        />

        <motion.div
          className="about__text"
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: true }}
        >
          <h2>About us</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            earum vitae voluptates iusto? Eum sed dolorum voluptatum ratione
            odio incidunt possimus magni a, quaerat odit! Excepturi fugiat
            deserunt perferendis magnam.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

