
/*********************************************
 * horizontal parallax section
 *********************************************/
import ParallaxText from "./ParallaxText";

function ParallaxScroll() {
  return (
    <div className="parallax-wrap">
      <ParallaxText baseVelocity={2}>
        <img src="/images/logo.svg" alt="logo" />
        lorem1
      </ParallaxText>

      <ParallaxText baseVelocity={-2}>
         <img src="/images/logo.svg" alt="logo" />
        lorem14
      </ParallaxText>

      <ParallaxText baseVelocity={2}>
         <img src="/images/logo.svg" alt="logo" />
        lorem1555
      </ParallaxText>

      <ParallaxText baseVelocity={-2}>
       <img src="/images/logo.svg" alt="logo" />
        lorem1222
      </ParallaxText>
    </div>
  );
}
export default ParallaxScroll;
