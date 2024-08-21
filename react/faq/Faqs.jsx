
/*********************************************
 * faq component
 *********************************************/
import { useState } from "react";

import questionsItems from "./questions";
import SingleFaq from "./SingleFaq";

function Faqs() {
  const [faqs] = useState(questionsItems);
  const [expanded, setExpanded] = useState(1);

  return (
    <section className="faqs">
      {faqs.map((faq, i) => (
        <SingleFaq
          faq={faq}
          key={i}
          expanded={expanded}
          setExpanded={setExpanded}
          i={i}
        />
      ))}
    </section>
  );
}

export default Faqs;
