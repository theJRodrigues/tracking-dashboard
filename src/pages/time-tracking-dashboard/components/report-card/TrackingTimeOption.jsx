import { useContext, useState, useId } from 'react'
import { TrackingContext } from '../../../../contexts/TrackingContext'
import { DataContext } from '../../../../contexts/DataContext';



const TrackingTimeOption = () => {
  
  const {setTrackingOption} = useContext(TrackingContext);
  const {timeFrames} = useContext(DataContext);
  const id = useId(); 
  function handleClick(e){
    setTrackingOption(e.target.textContent);
  }
 
  console.log(timeFrames)
  return (
    <>
    </>
  )
}

export default TrackingTimeOption