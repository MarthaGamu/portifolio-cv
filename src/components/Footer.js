import React from "react";

/*import "../css/footer.css";*/

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="social">
          <div className="footerWrapper">
            <div className="socialnner">
              <span className="flink">
                <a
                  href="https://www.facebook.com/marthag.mandizvidza/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  FACEBOOK
                </a>
              </span>

              {/*  <span className="flink">
              {" "}
              <a href='className="social-links"'>EMAIL</a>
            </span>*/}
              <span className="flink">
                <a
                  href="https://github.com/MarthaGamu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GITHUB
                </a>
              </span>
              <span className="flink">
                <a
                  href="https://www.linkedin.com/in/martha-g-mandizvidza-131956131/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LINKEDIN
                </a>
              </span>
              <span className="flink">
                <a href="mailto:marthagmandizvidza60@gmail.com">EMAIL</a>
              </span>
            </div>
            <div className="copyrights">
              <span className="copyright">
                &copy; 2020 by Martha G Mandizvidza.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
