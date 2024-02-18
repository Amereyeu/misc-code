
import { useCookies } from "react-cookie";

function Cookies() {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  var cookieExpire = new Date();
  cookieExpire.setDate(cookieExpire.getDate() + 7);

  const giveCookieConsent = () => {
    // setCookie("cookieConsent", true, { path: "/" }); //session cookie
    setCookie("cookieConsent", true, { expires: cookieExpire }); //expires in 7 days
  };

  return (
    <div id="gdpr">
      <p>
        Tento web používá soubory cookie. Dalším procházením tohoto webu
        vyjadřujete souhlas s jejich používáním.
      </p>
      <button id="cookieButton" onClick={giveCookieConsent}>
        Rozumím
      </button>
    </div>
  );
}

export default Cookies;
