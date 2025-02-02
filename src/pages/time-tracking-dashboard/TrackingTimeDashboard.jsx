import { useEffect, useState} from "react";
import axios from "axios";
import UserProfile from "./components/report-card/UserProfile";
import TimeFrameOption from "./components/report-card/TimeFrameOption";
import TrackingTimeCard from "./components/tracking-cards/TrackingTimeCard";


const TrackingTimeDashboard = () => {
  const [timeFrameOpt, setTimeFrameOpt] = useState();
  const [timeInfo, setTimeInfo] = useState();
  const [user, setUser] = useState();
  const [frameOption, setFrameOption] = useState();

  useEffect(() =>{
    const getData = async () =>{
      try {
        const response = await axios.get("/src/assets/datas/data.json");
        setTimeFrameOpt(Object.values(response.data.timeFramesOpt));
        setTimeInfo(Object.values(response.data.timeInfos));
        setFrameOption(Object.values(response.data.timeFramesOpt)[0]);
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  },[])
console.log(user)
  
  return (
    <>
    <section>
      <article>
        <UserProfile name={user?.name} avatar={user?.avatar}/>
        <nav>
          <ul>
            {timeFrameOpt?.map(option => 
            <TimeFrameOption 
            key={option}
            timeFrameOpt={option}
            setOption= {() => setFrameOption(option)}/>)}
          </ul>
        </nav>
      </article>
    </section>
      
    <section className="grid gap-6 grid-cols-3">
      {timeInfo?.map(info => {
        if (!info.timeframes[frameOption]) return null;

          const trackingTime = info.timeframes[frameOption];
          const currentTime = trackingTime.current < 0 ? "Invalid Value"
          : trackingTime.current ?? "404 Error: Data Not Found";
          const previousTime = trackingTime.previous < 0 ? "Invalid Value" 
          : trackingTime.previous ?? "404 Error: Data Not Found";

          return <TrackingTimeCard 
            key={info.type} 
            type= {info.type} 
            currentTime={currentTime}
            previousTime={previousTime}/>}
     )}
    </section>
      
    </>
  );
};

export default TrackingTimeDashboard;
