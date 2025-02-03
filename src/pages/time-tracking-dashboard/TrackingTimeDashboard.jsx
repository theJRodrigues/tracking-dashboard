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
    <section>
      <article>
        <UserProfile name={user?.name} avatar={user?.avatar}/>
        <nav className="bg-Dark-blue p-4 rounded-lg">
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
      
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {timeInfos?.map(info => {
        if (!info.timeframes[frameOption]) return null;

          const trackingTime = info.timeframes[frameOption];
          const currentTime = trackingTime.current < 0 ? "Invalid Value"
          : trackingTime.current ?? "404 Error: Data Not Found";
          const previousTime = trackingTime.previous < 0 ? "Invalid Value" 
          : trackingTime.previous ?? "404 Error: Data Not Found";

          return (
          <article key={info.type} className="rounded-lg overflow-hidden" >
            <ImageTypeCard 
            type={info.type}
            urlImage={info.urlImage} 
            bgColor={info.bgColor}/>

            <TrackingTimeCard 
            type= {info.type} 
            currentTime={currentTime}
            previousTime={previousTime}/>
          </article>
          )}
     )}
    </section>
      
    </>
  );
};

export default TrackingTimeDashboard;
