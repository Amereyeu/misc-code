
/*********************************************
 * information banner section
 *********************************************/

import { Clock } from "./clock";
import { Facebook } from "./facebook";
import { Map } from "./map";
import { Mastodon } from "./mastodon";
import { Phone } from "./phone";
import { Twitter } from "./twitter";

function Information() {
  return (
    <div className="information-wrap">
      <div className="information">
        <div className="information__map">
          <Map />
          <p>Broadway 418 Nashville, TN 38040</p>
        </div>
        <div className="information__phone">
          <Phone />
          <p>+420 123 456 789</p>
        </div>
        <div className="information__clock">
          <Clock />
          <p>Monday-Friday: 9:00 - 17:00</p>
        </div>
        <div className="information__social">
          <Facebook />
          <Mastodon />
          <Twitter />
        </div>
      </div>
    </div>
  );
}

export default Information;
