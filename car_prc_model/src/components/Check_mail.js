import React, { useRef, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import "../style/Pass_reset.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { miniSerializeError } from "@reduxjs/toolkit";
function Pass_reset() {
  const [email, setemail] = useState();
  const history = useHistory();
  const resetemail = useRef("");
  function mail() {
    window.location.href = "mailto:mail@domain.com";
  }
  async function reset_email() {
    setemail(resetemail.current.value);
    auth
      .sendPasswordResetEmail(email)
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        alert(e.message);
      });
  }
  return (
    <div className="pass_reset">
      <div className="container_1">
        <img src="email" alt="" />
        <text>Check your mail</text>
        <h1 style={{ fontSize: "23px" }}>
          We have sent a password recover instruction to your email.
        </h1>
        <button
          onClick={() => {
            history.push("/auth");
          }}
        >
          Done
        </button>
        <footer
          style={{ fontSize: "14px", fontWeight: "500", paddingTop: "10px" }}
        >
          Did not receive the email? Check your spam filter or
          <Link style={{ paddingLeft: "3px" }} to="/resetpassword">
            try another email address
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Pass_reset;
