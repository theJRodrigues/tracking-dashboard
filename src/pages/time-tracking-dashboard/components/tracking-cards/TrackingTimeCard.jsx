import React from 'react';
import PropTypes from 'prop-types';
import ImageTypeCard from './ImageTypeCard/ImageTypeCard';

const TrackingTimeCard = ({type, currentTime, previousTime}) => {
  const typeOfCurrentTime = typeof currentTime !== 'number' && "text-red-500";
  const typeOfPreviousTime = typeof previousTime !== 'number' && "text-red-500";

  return (
      <article className='min-w-48 w-full rounded-lg flex flex-col overflow-hidden relative'>
        <ImageTypeCard type={type}/>
        <div className='card'>
          <h2>{type}</h2>
          <p className={`${typeOfCurrentTime}`}>{currentTime}</p>
          <p className={`${typeOfPreviousTime}`}>{previousTime}</p>
        </div>
        
      </article>
  )
}
TrackingTimeCard.propTypes = {
    type: PropTypes.string,
    currentTime: PropTypes.number,
    previousTime: PropTypes.number
    
};

export default TrackingTimeCard;
