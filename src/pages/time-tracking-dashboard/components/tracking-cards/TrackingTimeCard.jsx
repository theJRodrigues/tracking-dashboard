import React from 'react';
import PropTypes from 'prop-types';

const TrackingTimeCard = ({title, trackingTime}) => {
  
  const currentTime = trackingTime?.current < 0 
  ? "Invalid Value"
  : trackingTime?.current ?? "404 Error: Data Not Found";

  const previousTime = trackingTime?.previous < 0 
  ? "Invalid Value"
  : trackingTime?.previous ?? "404 Error: Data Not Found";


  const typeOfCurrentTime = typeof currentTime !== 'number' && "text-red-500";

  const typeOfPreviousTime = typeof previousTime !== 'number' && "text-red-500";

  return (
      <article>
        <p>{title}</p>
        <p className={`${typeOfCurrentTime}`}>{currentTime}</p>
        <p className={`${typeOfPreviousTime}`}>{previousTime}</p>
      </article>
  )
}
TrackingTimeCard.propTypes = {
    title: PropTypes.string,
    trackingTime: PropTypes.shape({
        current: PropTypes.number,
        previous: PropTypes.number
    }).isRequired
};

export default TrackingTimeCard;
