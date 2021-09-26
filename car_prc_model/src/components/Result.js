import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../style/Result.css";
import "../style/Pass_reset.css";
function Result() {
  const [result, setresult] = useState("");
  const history = useHistory();
  useEffect(() => {
    setresult(localStorage.getItem("result"));
  }, [result]);
  return (
    <div className="pass_reset">
      <div className="container_1">
        <text>Result</text>
        <h1
          style={{
            fontSize: "19px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          you can sell your car upto{" "}
          <p
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "6px",
              paddingLeft: "5px",
              color: "rgb(23, 38, 128)",
              fontSize: "20px",
            }}
          >
            "{result} Lakhs"
          </p>
        </h1>
        <button
          onClick={() => {
            history.push("/home");
          }}
        >
          Done
        </button>
        <Link
          style={{
            display: "flex",
            marginLeft: "auto",
            fontSize: "17px",
            fontWeight: "600",
            paddingTop: "10px",
          }}
          to="/"
          onClick={() => {
            history.push("/");
          }}
        >
          back to home page?
        </Link>
      </div>
    </div>
  );
}

export default Result;
