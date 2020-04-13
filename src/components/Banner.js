import React from "react";
/*import "../css/banner.css";*/

function Banner() {
  return (
    <div className="Banner">
      <div className="info">
        <h3 style={{ fontSize: "3rem" }}>
          I'm <span className="letter">Available </span>for Front End Web{" "}
          Development
        </h3>
        <p>
          I am willing to start As soon as possible.I am looking foward to speak
          with you.
        </p>

        <button className="hire" style={{ fontSize: "15px" }}>
          HIRE ME
        </button>
      </div>
    </div>
  );
}

export default Banner;
