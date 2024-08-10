
import { TypeAnimation } from "react-type-animation";

function Typing() {
  return (
    <TypeAnimation
      sequence={[
        "Good Morning",
        1000,
        "Good Afternoom",
        1000,
        "Good Evening",
        1000,
      ]}
      wrapper="div"
      className="typewriter"
      speed={50}
      cursor={true}
      repeat={Infinity}
    />

    // https://react-type-animation.netlify.app/examples
  );
}

export default Typing;
