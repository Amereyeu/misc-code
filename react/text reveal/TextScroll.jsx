/*********************************************
 * text reveal word by word with framer motion
 * on page scroll
 *********************************************/

import Paragraph from "./Paragraph";
import Words from "./Words";

function TextScroll() {
  const paragraph =
    "This is a really long paragraph that I want to display on the screen, so I am going to write a lot of words to make sure that it is long enough to fill the screen.";

  return (
    <div className="text-reveal-wrap">
      <div className="h-screen"></div>

      <Words value={paragraph} />

      <div className="h-screen"></div>

      <Paragraph value={paragraph} />

      <div className="h-screen"></div>
    </div>
  );
}

export default TextScroll;
