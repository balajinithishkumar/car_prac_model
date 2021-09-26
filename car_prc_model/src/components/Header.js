import React, { useEffect, useState } from "react";
import "../style/Header.css";
import { auth } from "./firebase";
import { Avatar } from "@material-ui/core";

function Header() {
  const [first_l, setfirst_l] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((res) => {
      setfirst_l(res.email.substring(0, 1));
    });
  }, []);
  return (
    <div className="header">
      <div className="container1">
        <p>Arrowcar</p>
      </div>
      <div className="container2">
        <input type="text" placeholder="Search....." />
        <p>
          <Avatar
            style={{
              backgroundColor: "white",
              color: "#030340",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
            src=""
          >
            {first_l}
          </Avatar>
        </p>
        <button
          onClick={() => {
            auth.signOut();
          }}
        >
          Signout
        </button>
      </div>
    </div>
  );
}
export default Header;
