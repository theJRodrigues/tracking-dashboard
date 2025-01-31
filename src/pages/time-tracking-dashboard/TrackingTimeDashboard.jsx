import { useEffect, useState } from "react";
import axios from "axios";


import Profile from "./components/report-card/Profile";
import TimeFrameOption from "./components/report-card/TimeFrameOption";
import TrackingCard from "./components/tracking-cards/TrackingCard";


const TrackingTimeDashboard = () => {
  const [timeFramesData, setTimeFramesData] = useState();
  const [timeInfosData, setTimeInfosData] = useState();

  useEffect(() =>{
    const getData = async () =>{
      const response = await axios
      .get("https://raw.githubusercontent.com/theJRodrigues/tracking-dashboard/refs/heads/main/src/assets/datas/data.json")
      .then(response => {
        setTimeFramesData(Object.values(response.data.timeFrames))
        setTimeInfosData(Object.values(response.data.timeInfos))
      })
    }
    getData()
  },[])

  console.log(timeFramesData, timeInfosData);
  return (
    <>
      <article>
        <Profile />
        <TimeFrameOption />
      </article>
      <TrackingCard />
    </>
  );
};

export default TrackingTimeDashboard;
