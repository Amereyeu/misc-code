
import { useRef, useState } from "react";

import galleryItems from "./gallery";

function Snap() {
  const [data] = useState(galleryItems);

  const sliderRef = useRef(null);
  const scrollAmount = 200;

  return (
    <div className="list-wrap">
      <button
        className="button previous"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
        &lt;
      </button>

      <ul className="list" ref={sliderRef}>
        {data.map((image, i) => {
          return (
            <li className="list__item" key={i}>
              <div
                className="list__item__content"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </li>
          );
        })}
      </ul>

      <button
        className="button next"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}
      >
        &gt;
      </button>
    </div>
  );
}

export default Snap;
