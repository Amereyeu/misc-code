
import { useState } from "react";

import InfiniteSlider from "./InfiniteSlider";
import galleryItems from "./gallery";

function SliderVertical() {
  const [data] = useState(galleryItems);

  return (
    <div className="infinite-slider-wrap">
      <InfiniteSlider direction="vertical">
        {data.map((item, index) => (
          <img src={item} alt={index} className="box__image" key={index} />
        ))}
      </InfiniteSlider>

      <InfiniteSlider direction="vertical" reverse>
        {data.map((item, index) => (
          <img src={item} alt={index} className="box__image" key={index} />
        ))}
      </InfiniteSlider>
    </div>
  );
}

export default SliderVertical;
