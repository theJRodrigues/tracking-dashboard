import Profile from './components/report-card/Profile'
import { TrackingContextProvider } from '../../contexts/TrackingContext'
import TrackingCard from './components/tracking-cards/TrackingCard'
import TrackingTimeOption from './components/report-card/TrackingTimeOption'
import { DataContextProvider } from '../../contexts/DataContext'

const TrackingTimeDashboard = () => {
  return (
    <DataContextProvider>
      <TrackingContextProvider>
            <article>
                <Profile />
                <TrackingTimeOption/>
            </article>

            <TrackingCard/>
        </TrackingContextProvider>
    </DataContextProvider>
  
  )
}

export default TrackingTimeDashboard