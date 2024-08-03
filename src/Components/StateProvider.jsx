import React, { createContext, useEffect, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [workTime, setWorkTime] = useState(25*60);
    const [shortBreakTime, setShortBreakTime] = useState(0.3*60);
    const [longBreakTime,setLongBreakTime]=useState(30*60);


    // to store work Time
    const [initTime,setInitTime]=useState(0);

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(20);
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    switch(active){
        case 0:
            setTime(workTime);
            setInitTime(workTime);
            break;
        case 1:
            setTime(shortBreakTime);
            setInitTime(shortBreakTime);
            break;
        case 2:
            setTime(longBreakTime);
            setInitTime(longBreakTime);
            break;
        default:
            break;
    }
  },[active,workTime,shortBreakTime,longBreakTime])
  return (
    <StateContext.Provider
      value={{
        isActive,
        setIsActive,
        time,
        setTime,
        active,
        setActive,
        progress,
        setProgress,
        initTime,setInitTime,
        workTime,setWorkTime,
        shortBreakTime,setShortBreakTime,
        longBreakTime,setLongBreakTime
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;