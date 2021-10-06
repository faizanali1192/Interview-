import React from "react";
import "./InnerHero.css";
const InnerHero = () => {
  return (
    <div className="container d-none d-md-block ">
      <div className=" row w-100 d-flex justify-content-between  px-5 ">
        <div className="card bg-white card-wrapper">
          <div className="card-body">
            <h5 className="card-title text-center">Stocks</h5>
          </div>
        </div>
        <div className="card bg-white card-wrapper">
          <div className="card-body">
            <h5 className="card-title text-center">Forex</h5>
          </div>
        </div>
        <div className="card bg-white card-wrapper">
          <div className="card-body">
            <h5 className="card-title text-center">Crypto</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerHero;
