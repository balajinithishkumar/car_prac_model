import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { auth } from "./firebase";
import "../style/Home.css";
import Header from "./Header";
function Home() {
  const history = useHistory();
  const [Present_Price, setPresent_Price] = useState("");
  const [Kms_Driven2, setKms_Driven2] = useState("");
  const [Owner, setOwner] = useState("");
  const [Year, setYear] = useState("");
  const [Fuel_Type_DP, setFuel_Type_DP] = useState("");
  const [Seller_Type_Individual, setSeller_Type_Individual] = useState("");
  const [Transmission_Mannual, setTransmission_Mannual] = useState("");
  function post_data(e) {
    e.preventDefault();
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        Year: Year,
        price: Present_Price,
        km: Kms_Driven2,
        ftype: Fuel_Type_DP,
        di: Seller_Type_Individual,
        tm: Transmission_Mannual,
        owner: Owner,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8 ",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((resu) => {
        localStorage.setItem("result", resu);
        console.log(resu);
        history.push("/result");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="home">
      <div className="header_container">
        <Header />
      </div>
      <div className="predict_data">
        <div className="header">
          <p>Car prediction</p>
        </div>
        <div className="container">
          <form action="React.js">
            <p> What is the Showroom Price?(In lakhs) </p>
            <input
              type="text"
              placeholder="PresentPrice"
              onChange={(e) => {
                setPresent_Price(e.target.value);
              }}
              required
            />
            <p>Kmsdriven</p>
            <input
              type="text"
              placeholder="Kmsdriven"
              required
              onChange={(e) => {
                setKms_Driven2(e.target.value);
              }}
            />
            <p>Owner(1 or 3)?</p>
            <input
              type="text"
              required
              placeholder="Owner"
              onChange={(e) => {
                setOwner(e.target.value);
              }}
            />
            <p>Year</p>
            <input
              type="text"
              required
              placeholder="year"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            <p>what is the fuel type</p>
            <select
              name="Petrol"
              id=""
              onChange={(e) => {
                setFuel_Type_DP(e.target.value);
              }}
            >
              <option value="Petrol">Petrol</option>
              <option value="diesel">diesel</option>
            </select>
            <p>Are you A Dealer or Individual</p>
            <select
              name="Dealer"
              id=""
              onChange={(e) => {
                setSeller_Type_Individual(e.target.value);
              }}
            >
              <option value="dealer">dealer</option>
              <option value="Individual">Individual</option>
            </select>
            <p> Transmission type </p>
            <select
              name="manual car"
              id=""
              onChange={(e) => {
                setTransmission_Mannual(e.target.value);
              }}
            >
              <option value="Mannual">Mannual</option>
              <option value="automatic car">automatic car</option>
            </select>
            <button
              type="submit"
              onClick={(e) => {
                post_data(e);
              }}
            >
              Predict
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Home;
