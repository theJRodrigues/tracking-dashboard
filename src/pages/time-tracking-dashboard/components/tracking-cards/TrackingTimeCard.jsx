import React from 'react';
import PropTypes from 'prop-types';

const TrackingTimeCard = ({type, currentTime, previousTime}) => {
  const typeOfCurrentTime = typeof currentTime !== 'number' && "text-red-500";
  const typeOfPreviousTime = typeof previousTime !== 'number' && "text-red-500";

  return (
        <div className='card rounded-lg'>
          <h2>{type}</h2>
          <p className={`${typeOfCurrentTime}`}>{currentTime}</p>
          <p className={`${typeOfPreviousTime}`}>{previousTime}</p>
        </div>
  )
}
TrackingTimeCard.propTypes = {
    type: PropTypes.string,
    currentTime: PropTypes.number,
    previousTime: PropTypes.number
    
};

export default TrackingTimeCard;
