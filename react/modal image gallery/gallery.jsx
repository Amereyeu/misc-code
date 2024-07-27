
/*********************************************
 * gallery section
 *********************************************/
import { useState } from "react";

import galleryItems from "../../data/gallery";
import Modal from "./Modal";

function Gallery() {
  const [data] = useState(galleryItems);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;

    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }

    const newIndex = currentIndex - 1;

    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationRight = () => {
    const totalLength = data.length;

    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0];
      setClickedImg(newUrl);
      return;
    }

    const newIndex = currentIndex + 1;

    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="gallery-wrap" id="gallery">
      <h2>Gallery</h2>

      <div className="gallery">
        {data.map((item, index) => (
          <img
            src={item}
            alt={index}
            className="gallery__image"
            key={index}
            onClick={() => handleClick(item, index)}
          />
        ))}
      </div>

      {clickedImg ? document.body.classList.add("dbs") : ""}
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          setClickedImg={setClickedImg}
          handelRotationRight={handelRotationRight}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </section>
  );
}

export default Gallery;
