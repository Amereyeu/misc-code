
import { useCountUp } from "react-countup";


function Counter() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    // scrollSpyDelay: 1000,
    scrollSpyOnce: true,
    duration: 4,
  });

  useCountUp({
    ref: "counter2",
    end: 12345,
    enableScrollSpy: true,
    // scrollSpyDelay: 1000,
    scrollSpyOnce: true,
    duration: 4,
  });

  useCountUp({
    ref: "counter3",
    end: 5981,
    enableScrollSpy: true,
    // scrollSpyDelay: 1000,
    scrollSpyOnce: true,
    duration: 4,
  });

  return (
    <div className="counter-wrap">
      <div className="counter">
        <div className="counter__item">
          <div className="counter__item__icon">
            <img src="/img/send.svg" alt="icon" />
          </div>
          <div className="counter__item__number">
            <span id="counter" />
          </div>
          <div className="counter__item__text">
            <p>Sit odio aut distinctio necessitatibus </p>
          </div>
        </div>

        <div className="counter__item">
          <div className="counter__item__icon">
            {" "}
            <img src="/img/mail.svg" alt="icon" />
          </div>
          <div className="counter__item__number">
            <span id="counter2" />
          </div>
          <div className="counter__item__text">
            <p>soluta consequuntur ab vero</p>
          </div>
        </div>

        <div className="counter__item">
          <div className="counter__item__icon">
            {" "}
            <img src="/img/user.svg" alt="icon" />
          </div>
          <div className="counter__item__number">
            <span id="counter3" />
          </div>
          <div className="counter__item__text">
            <p>non ullam error numquam nesciunt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
