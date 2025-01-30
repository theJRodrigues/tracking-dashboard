import { useContext } from 'react'
import { TrackingContext } from '../../../../contexts/TrackingContext'

const Tracking = () => {
  const {trackingOption, setTrackingOption} = useContext(TrackingContext);

  function handleClick(){
    setTrackingOption(trackingOption + 1);
  }
  return (
    <button onClick={handleClick}>Teste</button>
  )
}

export default Tracking