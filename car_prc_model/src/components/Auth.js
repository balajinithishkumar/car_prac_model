import React, { useState } from "react";
import "../style/Auth.css";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
function Auth() {
  const [lsroute, setlsroute] = useState(<LoginForm />);
  const [class_name, setclass_name] = useState();
  function lsroute_function(par, classname) {
    console.log(classname);
    if (par == "login") {
      setlsroute(<LoginForm />);
      return "";
    }
    setlsroute(<Signup />);
  }
  return (
    <div className="auth">
      <div className="auth_container">
        <div className="option1">
          <div className="header">
            <p>Arrowcar</p>
          </div>
          <div className="login_sigup">
            <div
              className="ls_logo"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="login">
                <button
                  onClick={() => {
                    lsroute_function("login", "transation");
                    setclass_name("");
                  }}
                >
                  Login
                </button>
                <p
                  style={{
                    margin: "-39px",
                    transition: "ease-in all 0.5s",
                  }}
                  className={`login_border ${class_name ? "transation" : ""}`}
                ></p>
              </div>
              <div className="signup">
                <button
                  onClick={() => {
                    lsroute_function("signup", "transation");
                    setclass_name("transation");
                  }}
                >
                  Sign up
                </button>
                <p style={{ margin: "-39px" }}></p>
              </div>
            </div>

            <div className="ls_froms">{lsroute}</div>
          </div>
        </div>
        <div className="option2">
          <img src="car.jpg" alt="" />
          <div className="option2_header"></div>
        </div>
      </div>
    </div>
  );
}
export default Auth;
