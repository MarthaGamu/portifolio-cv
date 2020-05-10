import React from "react";

/*import "../css/contact.css";*/
function Contact() {
  return (
    <div
      className="contact_me"
      id="Contact"
      data-aos="slide-up"
      data-aos-duration="1"
    >
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
            <p>
              62 St John's Rd Sevenoaks,Kent <br />
              United Kingdom
            </p>
          </div>
        </div>
        <div className="iconWrapper">
          <div className="icon">
            <i class="fas fa fa-phone"></i>
            <p>07751099803</p>
          </div>
        </div>
        <div className="iconWrapper">
          <div className="icon">
            <i class="far fa fa-envelope"></i>
            <p>
              marthagmandizvidza60
              <br />
              @gmail.com
            </p>
          </div>
        </div>
        <div className="iconWrapper">
          <div className="icon">
            <i class="fas  fa fa-globe"></i>
            <p>marthagma.co.uk</p>
          </div>
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
