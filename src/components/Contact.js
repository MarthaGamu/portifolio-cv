import React from "react";

/*import "../css/contact.css";*/
function Contact() {
  return (
    <div className="contact_me" id="Contact">
      <div className="contact-wrapper">
        <h1 className="mainHeading">CONTACT ME</h1>
        <div className="horizontal-line">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div>

      <div className="icons">
        <div className="iconWrapper">
          <div className="icon">
            <i class="fas fa fa-map-marker"></i>
          </div>
          <p>
            62 St John's Rd <br />
            Sevenoaks,Kent
            <br />
            United Kingdom
          </p>
        </div>
        <div className="iconWrapper">
          <div className="icon">
            <i class="fas fa fa-phone"></i>
          </div>
          <p>07751099803</p>
        </div>
        <div className="iconWrapper">
          <div className="icon">
            <i class="far fa fa-envelope"></i>
          </div>
          <p>
            marthagmandizvidza60
            <br />
            @gmail.com
          </p>
        </div>
        <div className="iconWrapper">
          <div className="icon">
            <i class="fas  fa fa-globe"></i>
          </div>
          <p>marthagma</p>
        </div>
      </div>
      <div className="map_form">
        <div className="form">
          <div className="innerForm">
            <input
              type="text"
              name="firstName"
              placeholder=" Name*"
              className="fName"
            />
            <input
              type="text"
              name="lastName"
              placeholder=" Surname*"
              className="lname"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              className="subject"
            />

            <textarea
              id="w3mission"
              placeholder="Message*"
              className="message"
            />
            <br />
            <button className="submit">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
