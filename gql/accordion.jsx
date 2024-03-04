import { useState } from "react";

import Explorer from "../components/vim/Explorer";
import Own from "../components/vim/Own";

function Vim() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (index !== openAccordion) {
      setOpenAccordion(index);
    } else {
      setOpenAccordion(null);
    }
  };

  return (
    <div className="vim-wrap">
      <h2
        onClick={() => handleAccordionClick(0)}
      >
        Vlastní zkratky
      </h2>

      <div className={`box ${openAccordion === 0 ? "open" : "closed"}`}>
        <Own />
      </div>

      <h2
        onClick={() => handleAccordionClick(1)}
      >
        Explorer
      </h2>

      <div className={`box ${openAccordion === 1 ? "open" : "closed"}`}>
        <Explorer />
      </div>
    </div>
  );
}

export default Vim;

