import {createContext, useState} from "react";

export const TrackingContext = createContext()

export const TrackingContextProvider = ({children}) =>{
    const [trackingOption, setTrackingOption] = useState(null);
    return(
        <TrackingContext.Provider value = {{trackingOption, setTrackingOption}}>
            {children}
        </TrackingContext.Provider>
    )
}