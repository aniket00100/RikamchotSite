import React from "react";

import "./menuBar.css";

const menuBar = () => {
  return (
    <div className="bar">
      <div className="ui secondary menu">
        <a className="ui basic item a-tag" href="/" style={{ color: "white" }}>
          Home
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search for a Rikamchot ..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item a-tag" href="/" style={{ color: "white" }}>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default menuBar;
