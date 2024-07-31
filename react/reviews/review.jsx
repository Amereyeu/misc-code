
/*********************************************
 * review section - slider
 *********************************************/

import { useState } from "react";
import { Slide } from "react-slideshow-image";
import sliderItems from "./slider";

function Slideshow() {
  const [data] = useState(sliderItems);

  const responsiveSettings = [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <section className="slider-wrap" id="reviews">
      <h2>Reviews</h2>

      <Slide
        autoplay={true}
        infinite={true}
        duration={3000}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
        slidesToScroll={1}
        slidesToShow={1}
        transitionDuration={800}
        responsive={responsiveSettings}
        // nextArrow={<button className="slide-next"></button>}
        // prevArrow={<button className="slide-prev"></button>}
        indicators={(index) => <div className="indicator">{index + 1}</div>}>
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="item__container">
              <blockquote>
                <p>{item.text}</p>
              </blockquote>

              <cite>{item.author}</cite>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
}

export default Slideshow;
