import { configureStore } from "@reduxjs/toolkit";
import React, { useRef, useEffect, useState } from "react";
import "../style/Loginform.css";
import { auth } from "./firebase";
function Signup() {
  const email = useRef();
  const create_password = useRef();
  const retype_password = useRef();
  const check_box = useRef();
  const [excepted_pass, setexcepted_pass] = useState("");
  const [excepted_gmail, setexcepted_gmail] = useState("");
  function except_user() {
    console.log(excepted_gmail);
    auth
      .createUserWithEmailAndPassword(excepted_gmail, excepted_pass)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  const signup = () => {
    const email_ = email.current.value;
    const create_pass = create_password.current.value;
    const repeat_pass = retype_password.current.value;
    const checkbox_ = check_box.current.checked;
    const search = email_.search("@");
    const email_check = email_.substring(search, search + 1);
    if (email_check == "@") {
      setexcepted_gmail(email_);
      console.log("done");
    } else {
      alert("Invalid Email");
      return "";
    }
    if (create_pass == repeat_pass) {
      setexcepted_pass(repeat_pass);
      console.log(repeat_pass);
    } else {
      alert("repeat password is dones't match to create password");
      return "";
    }
    if (checkbox_) {
      except_user();
      return "";
    } else {
      alert("agree the  Terms and conditions");
      return "";
    }
  };

  return (
    <div className="signup">
      <div className="loginform">
        <form action="">
          <name>Email</name>
          <input ref={email} type="email" placeholder="Email" />
          <name>Create Password</name>
          <input
            ref={create_password}
            type="password"
            placeholder="Create Password"
          />
          <name>Repeat Password"</name>
          <input
            ref={retype_password}
            type="password"
            placeholder="Repeat Password"
          />
        </form>
        <div className="user_agree">
          <input className="checked" ref={check_box} type="checkbox" />
          <p>
            i agree with <a>Terms and conditions</a>
          </p>
        </div>
        <div className="login_button">
          <button onClick={() => signup()} type="submit">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
