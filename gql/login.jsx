
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isIconClicked, setIsIconClicked] = useState(false);

  const handlePassword = () => {
    setIsIconClicked((prevState) => !prevState);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
    console.log("username:", username);
    console.log("password", password);
  };

  return (
    <div className="form-wrap">
      <form id="contact-form" role="form" onSubmit={handleLogin}>
        <div className="form-row">
          <div className="form-group">
            <input
              id="name"
              type="text"
              placeholder="Name"
              className={`form-control user `}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              id="password"
              type={`${isIconClicked ? "text" : "password"}`}
              placeholder="Password"
              className="form-control"
            />
            <div
              className={`icon ${isIconClicked ? "eye-open" : "eye-closed"}`}
              onClick={handlePassword}
            ></div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <button className="send" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
