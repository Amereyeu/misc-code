
/*********************************************
 * gallery section
 *********************************************/

import { useState } from "react";
import galleryItems from "../../data/gallery";

function Gallery() {
  const [data] = useState(galleryItems);

  return (
    <section className="gallery-wrap" id="gallery">
      <h2>Galerie</h2>

      <div className="gallery">
        {data.map((image, i) => (
          <img src={image} alt={i} className="gallery__image" key={i} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
