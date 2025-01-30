import Profile from './components/report-card/Profile'
import Tracking from './components/report-card/Tracking'
import { TrackingContextProvider } from '../../contexts/TrackingContext'
import TrackingCard from './components/tracking-cards/TrackingCard'

const TrackingTimeDashboard = () => {
  return (
    <TrackingContextProvider>
        <article>
            <Profile />
            <Tracking />
        </article>

        <TrackingCard/>
    </TrackingContextProvider>
  )
}

export default TrackingTimeDashboard