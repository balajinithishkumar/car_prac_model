import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../style/Pass_reset.css";
import { auth } from "./firebase";
function Pass_reset() {
  const [email, setemail] = useState("");
  const resetemail = useRef("");
  const history = useHistory();
  function reset_email() {
    console.log(email);
    auth
      .sendPasswordResetEmail(email)
      .then((result) => {
        console.log(result);
        history.push("/checkmail");
      })
      .catch((e) => {
        alert(e.message);
      });
  }
  return (
    <div className="pass_reset">
      <div className="container_1">
        <text>Reset Password</text>
        <h>
          Enter the email associated your account and we'll send an email with
          instruction to reset your password
        </h>
        <p>Email Address</p>
        <input
          onChange={() => setemail(resetemail.current.value)}
          ref={resetemail}
          type="text"
          placeholder="Email"
        />
        <button onClick={() => reset_email()}>Send Instructions</button>
        <div className="back_to_signup">
          <Link to="/"> Back to Signup page ?</Link>
        </div>
      </div>
    </div>
  );
}
export default Pass_reset;