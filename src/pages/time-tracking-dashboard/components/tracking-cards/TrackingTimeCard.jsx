import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";


const TrackingTimeCard = ({ type, currentTime, previousTime }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <h1 className="font-Rubik-medium">{type}</h1>
        <button className="cursor-pointer text-Pale-Blue hover:text-white ">
          <FontAwesomeIcon icon={faEllipsis} size="xl"/>
        </button>
      </div>

      <div className="flex justify-between items-center sm:flex-col sm:items-start ">
        <p className="text-3xl sm:text-5xl font-Rubik-light mb-0.5">{currentTime}hrs</p>
        <p className="text-Pale-Blue ">Last Week - {previousTime}hrs</p>
      </div>
    </div>
  );
};
TrackingTimeCard.propTypes = {
  type: PropTypes.string,
  currentTime: PropTypes.number,
  previousTime: PropTypes.number,
};

export default TrackingTimeCard;
