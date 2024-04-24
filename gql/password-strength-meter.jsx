import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

export const RegisterForm = () => {
  const [password, setPassword] = useState("");

  return (
    <form>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <PasswordStrengthBar
        password={password}
        scoreWords={[
          "bad",
          "okay",
          "good",
          "strong",
          "perfect!",
        ]}
        shortScoreWord={"bad"}
      />

    </form>
  );
};

export default RegisterForm;
