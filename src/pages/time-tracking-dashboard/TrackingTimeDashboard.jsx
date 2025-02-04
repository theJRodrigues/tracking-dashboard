import { useEffect, useState} from "react";
import axios from "axios";
import UserProfile from "./components/user-card/UserProfile";
import TimeFrameOption from "./components/user-card/TimeFrameOption";
import TrackingTimeCard from "./components/tracking-cards/TrackingTimeCard";
import ImageTypeCard from "./components/tracking-cards/ImageTypeCard";


const TrackingTimeDashboard = () => {
  const [timeFrameOpt, setTimeFrameOpt] = useState();
  const [timeInfos, setTimeInfos] = useState();
  const [user, setUser] = useState();
  const [frameOption, setFrameOption] = useState();

  useEffect(() =>{
    const getData = async () =>{
      try {
        const response = await axios.get("/src/assets/datas/data.json");
        setTimeFrameOpt(Object.values(response.data.timeFramesOpt));
        setTimeInfos(Object.values(response.data.timeInfos));
        setFrameOption(Object.values(response.data.timeFramesOpt)[0]);
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  },[])
  
  return (
    <>
    <section className="bg-Dark-blue rounded-2xl">
      <article>
        <UserProfile name={user?.name} avatar={user?.avatar}/>
        <nav className="px-3 py-2">
          <ul className="flex justify-between gap-0.5">
            {timeFrameOpt?.map(option => 
            <TimeFrameOption 
            key={option}
            timeFrameOpt={option}
            setOption= {() => setFrameOption(option)}/>)}
          </ul>
        </nav>
      </article>
    </section>
      
    <section className="flex flex-col gap-2">
      {timeInfos?.map(info => {
        if (!info.timeframes[frameOption]) return null;
          const trackingTime = info.timeframes[frameOption];
          
          return (
          <article key={info.type} className="rounded-2xl overflow-hidden">
            <ImageTypeCard 
            type={info.type}
            urlImage={info.urlImage} 
            bgColor={info.bgColor}/>

            <TrackingTimeCard 
            type= {info.type} 
            currentTime={trackingTime.current ?? 0}
            previousTime={trackingTime.previous ?? 0}/>
          </article>
          )}
     )}
    </section>
      
    </>
  );
};

export default TrackingTimeDashboard;
