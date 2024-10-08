
/*********************************************
 * dropdown menu
 *********************************************/
import { Link } from "react-router-dom";

function Dropdown() {
  const items = ["one", "two", "three", "four"];

  console.log(items);

  return (
    <div className="select-box-wrap">
      <div className="select-box">
        <div className="select-box__current" tabIndex="1">
          <div className="select-box__current__value">
            <Link to="#">ALL</Link>
          </div>

          <div className="select-box__current__icon"></div>
        </div>

        <ul className="select-box__list">
          {items.map((category, i) => (
            <li className="select-box__list__option" key={i}>
              <Link className="select-box__list__option__item" to="#">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
