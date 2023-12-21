import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import defaultImage from "../../../public/images/contact.jpg";
import { GET_ABOUTUS_INFO } from "../../gql/queries";

function GqlAbout() {
  const { loading, error, data } = useQuery(GET_ABOUTUS_INFO);

  if (loading) {
    return (
      <div className="news-wrap">
        <div className="news__placeholder">
          <div className="circle"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-wrap">
        <div className="news__placeholder">
          <p>Při načítání došlo k chybě!</p>
        </div>
      </div>
    );
  }

  const aboutUsInfo = Boolean(data?.page.id === "cG9zdDoyMw==");

  if (!aboutUsInfo) {
    return (
      <div className="news-wrap">
        <div className="news__placeholder">
          <p>Stránka nenalezena.</p>
        </div>
      </div>
    );
  }

  console.log("about us data:", data);

  return (
    <div className="about-wrap">
      <div className="about">
        <motion.img
          className="about__image"
          src={
            data.page.featuredImage === null
              ? defaultImage
              : data.page.featuredImage.node.sourceUrl
          }
          alt={
            data.page.featuredImage === null
              ? "default imamge"
              : data.page.featuredImage.node.altText === ""
              ? data.page.featuredImage.node.title
              : data.page.featuredImage.node.altText
          }
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
          viewport={{ once: true }}>
          {/* <h3>{data.page.title}</h3> */}

          <div
            dangerouslySetInnerHTML={{
              __html: data.page.content,
            }}></div>
        </motion.div>
      </div>
    </div>
  );
}

export default GqlAbout;


