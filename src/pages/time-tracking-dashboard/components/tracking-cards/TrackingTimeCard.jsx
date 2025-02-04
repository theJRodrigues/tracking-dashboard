import React from "react";
import PropTypes from "prop-types";
import iconEllipsis from "/assets/images/icon-ellipsis.svg";

const TrackingTimeCard = ({ type, currentTime, previousTime }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <h1 className="font-Rubik-medium">{type}</h1>
        <button className="cursor-pointer ">
          <img src={iconEllipsis} alt="Ellipsis icon"/>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-Rubik-light">{currentTime}hrs</p>
        <p className="text-Pale-Blue">Last Week - {previousTime}hrs</p>
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
