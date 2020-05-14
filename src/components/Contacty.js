import React from "react";

function Contacty() {
  return (
    <div>
      <div className="contact-content">
        <h1 className="mainHeading">CONTACT ME</h1>
        <div className="horizontal-line">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div>

      <div className="ContactWrapper">
        <div className="innerWrapper">
          <div className="Details">
            <div className="address">
              <h5 className="innerHeadings">Address:</h5>
              <p className="info">
                62 St John's Rd Sevenoaks,Kent
                <br />
                United Kingdom
              </p>
            </div>
            <div className="email">
              <h5 className="innerHeadings">Email:</h5>
              <p className="info"> marthagmandizvidza60@gmail.com</p>
            </div>

            <div className="phone">
              <h5 className="innerHeadings">Phone:</h5>
              <p className="info"> +447751099803</p>
            </div>
          </div>
          <div className="Form">
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Subject*" />
            <textarea placeholder="Message*"></textarea>
            <br />
            <button className="submit"> SEND </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacty;
