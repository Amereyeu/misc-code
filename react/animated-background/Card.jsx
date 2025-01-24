

import { useState } from "react";

import Background from "./Background";
import cardItems from "./cards";

function Card() {
  const [data] = useState(cardItems);

  return (
    <div className="box-wrap">
      <Background
        className="bg"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {data.map((item, index) => (
          <div
            key={index}
            data-id={`card-${index + 1}`}
          >
            <div className="card">
              <h3 className="card__header">{item.title}</h3>
              <p className="card__text">{item.description}</p>
            </div>
          </div>
        ))}
      </Background>
    </div>
  );
}
export default Card;
