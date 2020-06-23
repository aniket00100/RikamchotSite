import React from "react";

import "./intro.css";

const intro = () => {
  return (
    <div className="divSegment">
      <div className="ui grid">
        <div className="six wide column">
          <img
            className="ui rounded image imgIntro"
            src={require("../../images/capjacksp.jpg")}
            alt="profile pic"
          />
        </div>
        <div className="two wide column"></div>
        <div className="eight wide column">
          <p className="introText">
            Iss nacheez ko Vainateya Nitin Manohar Ramkrushna Shringarpure kehte
            hai. Mostly this area will be filled with funny attributes like body
            stats, looks, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default intro;
