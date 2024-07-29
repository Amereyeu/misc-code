
/*********************************************
 * parallax using data from file
 *********************************************/
import parallaxItems from "./parallax";

function Parallax() {
  const number = parallaxItems.length;

  return (
    <div className="parallax-wrap">
      <div className={`parallax ${number % 2 === 0 ? "even" : "odd"}`}>
        {parallaxItems.map((item, i) => (
          <div className="parallax__item" key={i}>
            <div className="parallax__item__icon">
              <img src={item.icon} />
            </div>
            <div className="parallax__item__text">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parallax;
