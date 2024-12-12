
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { content } from "./content";

function Article() {
  let { id } = useParams();

  const { title, description, text, imgSrc } = content[id];

  const transition = { duration: 0.5, ease: "easeInOut" };

  const postVariants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
  };

  return (
    <motion.div
      className="page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={postVariants}
    >
      <div className="link-wrapper">
        <Link to="/page-swap">Back to Home page</Link>
      </div>

      <div className="post">
        <img className="post__img" src={`../../images/${imgSrc}`} alt={title} />
        <h1 className="heading">{title}</h1>
        <p>{description}</p>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}

export default Article;
