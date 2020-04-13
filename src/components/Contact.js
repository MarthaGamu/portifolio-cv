import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
/*import "../css/contact.css";*/
function Contact() {
  return (
    <div className="contact_me">
      <h1 className="mainHeading">Contact</h1>
      <div className="contactLogs">
        <div className="iconContact">
          <i className="fas fa fa-address-card"></i>
          <h4>62 St Johns Road Sevenoaks,England</h4>
        </div>
        <div className="iconContact">
          <i className="fas fa fa-phone"></i>
          <h4>+44 775 1099803</h4>
        </div>
        <div className="iconContact">
          <i class="fas  fa fa-envelope-square"></i>
          <h4>marthagmandizvidza60@gmail.com</h4>
        </div>
      </div>

      <div className="map_form">
        <div className="map"></div>

        <div className="form">
          <input type="text" name="firstName" placeholder="Your Name" />
          <input type="text" name="lastName" placeholder="Your Surname" />
          <input type="text" name="subject" placeholder="Subject" />

          <textarea id="w3mission" rows="6" cols="44" placeholder="Message" />
          <br />
          <button className="submit">SEND</button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
