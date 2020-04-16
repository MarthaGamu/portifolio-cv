import React from "react";

/*import "../css/contact.css";*/
function Contact() {
  return (
    <div className="contact_me">
      <h1 className="mainHeading">Contact</h1>
      <div className="contactLogs">
        <p>PLEASE GET IN TOUCH!</p>
      </div>

      <div className="map_form">
        <div className="map">
          <div className="mapContainer">
            <label>
              <strong>Address:</strong>
            </label>
            <p>
              62 St John's Rd <br />
              Sevenoaks,Kent
              <br />
              United Kingdom
            </p>

            <label>
              <strong>Postcode</strong>
            </label>
            <p>TN133NA</p>
            <label>
              <strong>Email:</strong>
            </label>
            <p>marthagmandizvidza60@gmail.com</p>
            <label>
              <strong>Mobile:</strong>
            </label>
            <p>07751099803</p>
            <div className="social-links">
              <i class="fab  fa fa-facebook-f"></i>
              <i class="fab fa fa-github"></i>
              <i class="far fa fa-envelope"></i>
              <i class="fab  fa fa-linkedin"></i>
            </div>
          </div>
        </div>

        <div className="form">
          <div className="innerForm">
            <input type="text" name="firstName" placeholder=" Name*" />
            <input type="text" name="lastName" placeholder=" Surname*" />
            <input type="text" name="subject" placeholder="Subject*" />

            <textarea id="w3mission" placeholder="Message*" />
            <br />
            <button className="submit">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
