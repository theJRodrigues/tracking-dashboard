import { useEffect, useState} from "react";
import axios from "axios";
import UserProfile from "./components/report-card/UserProfile";
import TimeFrameOption from "./components/report-card/TimeFrameOption";
import TrackingTimeCard from "./components/tracking-cards/TrackingTimeCard";


const TrackingTimeDashboard = () => {
  const [timeFrameOpt, setTimeFrameOpt] = useState();
  const [timeInfo, setTimeInfo] = useState();
  const [user, setUser] = useState();
  const [frameOption, setFrameOption] = useState("daily");

  useEffect(() =>{
    const getData = async () =>{
      try {
        const response = await axios.get("https://raw.githubusercontent.com/theJRodrigues/tracking-dashboard/refs/heads/main/src/assets/datas/data.json");
        setTimeFrameOpt(Object.values(response.data.timeFramesOpt));
        setTimeInfo(Object.values(response.data.timeInfos));
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  },[])

  
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
            setOption= {() => setFrameOption(option)}
            />)}
          </ul>
        </nav>
      </article>
    </section>
      
    <section>
      {timeInfo?.map(info => info?.timeframes?.[frameOption] 
      && <TrackingTimeCard 
          key={info?.type} 
          title= {info?.type} 
          trackingTime={info?.timeframes?.[frameOption]}/>)}
    </section>
      
    </>
  );
};

export default TrackingTimeDashboard;
