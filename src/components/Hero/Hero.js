import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="container-fluid hero-wrapper">
      <div className="row ">
        <div className="col-sm bg-img">
          
          <div className="row container h-100 p-md-5">
            <div className="col-sm-12 col-md-6 d-flex align-items-center ">
              <div class="texts">
                <h1 className="heading  ">
                  INNOVATE POWER TOOLS THAT ALIGN WITH YOUR GOALS
                </h1>
                <p className="text">
                  Trading in Forex,Metal Indexes, Energies, Stocks, ETFs and
                  Cryptocurrencies
                </p>
                <button
                  type="button"
                  className="btn btn-outline-light m-1 rounded-0  btn-lg"
                >
                  Open Account
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
