import React from "react";
import "./About.css";
import AboutImage from "../../images/building.jpg";
const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img class="card-img-top" src={AboutImage} alt="Card image cap" />
        </div>
        <div className="col col-md-6">
          <h4 className="heading-top">
            A TRADE ORIENTED <br />
            BROKER
          </h4>
          <p>
            No Name 1 is a top online Forex broker with many years of experience
            in the market. No name 1 being a client-oriented company, places the
            needs of every one of our customers as its own priority. We are
            committed to providing all our investors a wide range of options
            when trading to help them become better at trading and also make
            profits. At No name 1 we ensure all our clients are up to date with
            the market trends and also provide them with latest trading
            technology and Forex tools by investing continuously in innovations.
            These instruments are updated on a regular basis thereby offering
            new platforms and services to answer the various questions and meet
            the need of every trader, in so doing, we are keeping our promise
            and commitment towards a fair and open trading.
          </p>
        </div>
        <p>
          All our trusted clients have a 24/7 access to our various
          comprehensive educational materials. These materials help trader’s
          understand and learn more about the various online operations, trading
          and the global market in general. We have a great customer support
          team which is always and readily available to assist with any issue
          you might encounter or challenge you might face in the course of
          trading. At No name 1 we place high importance and emphasis on
          customer satisfaction, and we are dedicated to being more than just an
          online broker to our clients. Make your trading experience worth it,
          choose a right broker, and choose No name 1!
        </p>
      </div>
    </div>
  );
};

export default About;
