import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TrackingTimeDashboard from './pages/time-tracking-dashboard/TrackingTimeDashboard'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="container flex">
      <TrackingTimeDashboard />
    </main>
  </StrictMode>
)
