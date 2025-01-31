import { useContext } from 'react'
import { TrackingContext } from '../../../../contexts/TrackingContext'

const TrackingCard = () => {
const {trackingOption} = useContext(TrackingContext);
  return (
    <div>{trackingOption}</div>
  )
}

export default TrackingCard