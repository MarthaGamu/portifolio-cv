import React from "react";
import frontImage from "./images/frontImage.jpg";

function NamedBanner() {
  return (
    <div className="name_banner">
      <img src={frontImage} alt="front" />
    </div>
  );
}
export default NamedBanner;
