import React,{useContext,useEffect} from 'react'
import { StateContext } from '../../../StateProvider';
import './Clock.css'


const Clock = () => {
    const {time,setTime}=useContext(StateContext);
  const {isActive,setIsActive,initTime}=useContext(StateContext);

  useEffect(()=>{
    if(isActive &&time>0){
      const interval=setInterval(()=>{
        setTime((time)=>time-1)
      },1000)
      return ()=>{
        clearInterval(interval)
      }
    }
  },[time,isActive]);

  const toggleClock=()=>{
    setIsActive(!isActive);
  }

  const getTime=(time)=>{
    const min=Math.floor(time/ 60);
    const sec=time % 60;
    return `${min<10? "0"+min:min}:${sec<10? "0"+sec:sec}`;
  }

  const resetTime=()=>{
    setTime(initTime);
    setIsActive(false);
  }
  return (
    <div className='clock-container'>
      <h3 className='timer-text'>{getTime(time)}</h3>
      <button className='start-pause-button' onClick={toggleClock}>{isActive?"Pause":"Start"}</button>
      {time===0 &&<button className='reset' onClick={resetTime}>Reset</button>}
    </div>
  )
}

export default Clock
