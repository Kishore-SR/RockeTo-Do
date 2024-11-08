import { useEffect, useState } from "react";
import "./Todo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const DateTime = () => {
    const [dateTime, setDateTime] = useState("");

    // To display current 'Date and Time'
    useEffect(()=>{
        const interval = setInterval(()=>{
        
          const now = new Date();
          const currentDate = now.toLocaleDateString();
          const currentTime = now.toLocaleTimeString();
          setDateTime(`${currentDate} - ${currentTime}`);
        
        },1000)
        
        return ()=> {clearInterval(interval)};
      }, []);

    return(
      <h3 className="date-time-display">
      <FontAwesomeIcon icon={faClock} className="clock-icon" /> {dateTime}
    </h3>
    )
}