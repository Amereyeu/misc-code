
/*********************************************
 * one question component
 *********************************************/
import { AnimatePresence, motion } from "framer-motion";

function SingleFaq({ i, faq, expanded, setExpanded }) {
  const isOpen = i === expanded;

  return (
    <article className="faq">
      <motion.div
        className="faq__question"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="faq__question__text">{faq.question}</div>

        <div className={"faq__question__icon " + (isOpen ? "open" : "")}></div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq__answer"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.p
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default SingleFaq;
