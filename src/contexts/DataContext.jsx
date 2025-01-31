import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const DataContext = createContext();

export const DataContextProvider = ({children}) => {
    const [timeInfos, setTimeInfos] = useState();
    const [timeFrames, setTimeFrames] = useState();
    const url = "https://raw.githubusercontent.com/theJRodrigues/tracking-dashboard/refs/heads/main/src/assets/datas/data.json"
    
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("src/assets/datas/data.json")
        .then(response => {
          setTimeFrames(Object.values(response.data.typestimeframes))
          setTimeInfos(Object.values(response.data.infos))
        })
      }
      getData()
    }, [])

    return(
        <DataContext.Provider value = {{timeInfos, timeFrames }}>
            {children}
        </DataContext.Provider>
    )
}