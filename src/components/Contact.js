import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
/*import "../css/contact.css";*/
function Contact() {
  return (
    <div className="contact_me">
      <h1 className="mainHeading">Contact</h1>
      <div className="contactLogs">
        <p>PLEASE GET IN TOUCH!</p>
      </div>

      <div className="map_form">
        <div className="map"></div>

        <div className="form">
          <div className="innerForm">
            <input type="text" name="firstName" placeholder="Your Name" />
            <input type="text" name="lastName" placeholder="Your Surname" />
            <input type="text" name="subject" placeholder="Subject" />

            <textarea id="w3mission" rows="6" cols="44" placeholder="Message" />
            <br />
            <button className="submit">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
