import { motion } from "framer-motion";

function Option({ href, Icon, setOpen, setGoTop }) {
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: 15,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        setGoTop(true);
      }}
    >
      <div className="secondary-navigation__list__item">
        <motion.a href={href} target="_blank" variants={actionIconVariants}>
          <Icon />
        </motion.a>
      </div>
    </motion.li>
  );
}

export default Option;

