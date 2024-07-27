
import { Arrow } from "../../images/react-svg/arrow";

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
      document.body.classList.remove("dbs");
    }
  };

  return (
    <div className="modal-overlay dismiss" onClick={handleClick}>
      <div className="modal">
        <div className="md">
          <div className="md__close dismiss" onClick={handleClick}></div>

          <div className="modal__inner">
            <img src={clickedImg} alt="img" className="modal__inner__image" />
          </div>

          <div onClick={handelRotationLeft} className="modal__arrow-left">
            <Arrow />
          </div>

          <div onClick={handelRotationRight} className="modal__arrow-right">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
