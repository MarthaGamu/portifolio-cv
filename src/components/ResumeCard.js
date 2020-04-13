import React from "react";
import PropTypes from "prop-types";

const ResumeCard = ({ year, header, subtitle, listExtras }) => {
  return (
    <div className="resumeCard">
      <div className="innerCard">
        <span className="year">{year}</span>
        <h3 className="resumeHeader">{header}</h3>
        <h5 className="subtitle">{subtitle}</h5>

        <ul>
          {listExtras &&
            listExtras.length > 0 &&
            listExtras.map((item) => (
              <li key={item} className="resume-links">
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

ResumeCard.propTypes = {
  year: PropTypes.string,
  header: PropTypes.string,
  subtitle: PropTypes.string,
  listExtras: PropTypes.string,
};
export default ResumeCard;
