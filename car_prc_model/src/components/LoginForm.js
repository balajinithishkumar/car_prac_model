import { configureStore } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "../style/Loginform.css";
import { auth } from "./firebase";
function LoginForm() {
  const [excepted_gmail, setexcepted_gmail] = useState("");
  const [excepted_pass, setexcepted_pass] = useState("");
  const his = useHistory();
  async function except_to_login(par) {
    await auth
      .signInWithEmailAndPassword(excepted_gmail.trim(), excepted_pass)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.code);
      });
  }
  function Login() {
    const email_ = email.current.value;
    const password = enter_password.current.value;
    const repeat_pass = retype_password.current.value;
    const search = email_.search("@");
    const email_check = email_.substring(search, search + 1);
    const checkbox_ = check_box.current.checked;
    if (email_check == "@") {
      setexcepted_gmail(email_);
      console.log(email_);
    } else {
      alert("Invalid Email");
      return "";
    }
    if (password == repeat_pass) {
      setexcepted_pass(repeat_pass);
      console.log(repeat_pass);
    } else {
      alert("repeat password is dones't match to create password");
      return "";
    }
    if (checkbox_) {
      except_to_login();
      return "";
    } else {
      alert("agree the  Terms and conditions");
      return "";
    }
  }

  const email = useRef();
  const enter_password = useRef();
  const retype_password = useRef();
  const check_box = useRef();
  return (
    <div className="loginform">
      <form action="">
        <name>Email</name>
        <input ref={email} type="email" placeholder="Email" />
        <name>Password</name>
        <input ref={enter_password} type="password" placeholder="Password" />
        <name>Repeat Password</name>
        <input
          ref={retype_password}
          type="password"
          placeholder="Repeat Password"
        />
      </form>
      <div className="forget_pass">
        <Link to="/resetpassword">
          <p onClick={() => his.push("/resetpassword")}>Forget password ?</p>
        </Link>
      </div>
      <div className="user_agree">
        <input ref={check_box} type="checkbox" />
        <p>
          i agree with <a>Terms and conditions</a>
        </p>
      </div>
      <div className="login_button">
        <button type="submit" onClick={(e) => Login(e)}>
          Login In
        </button>
      </div>
    </div>
  );
}
export default LoginForm;
