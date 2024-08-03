import React,{useContext,useEffect,useState} from 'react'
import { StateContext } from '../../../StateProvider';
import './Clock.css'
import beepAudio from '../../../../../public/beep.mp3'


const Clock = () => {
    const {time,setTime}=useContext(StateContext);
  const {isActive,setIsActive,initTime}=useContext(StateContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(beepAudio);

  useEffect(() => {
    if (isActive && time === 0 && !isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  }, [isActive, time, isPlaying]);

  useEffect(()=>{
    if(isActive &&time>0 && !isPlaying){
      const interval=setInterval(()=>{
        setTime((time)=>time-1)
      },1000)
      return ()=>{
        clearInterval(interval)
      }
      
    }
  },[time,isActive,isPlaying]);

  const toggleClock=()=>{
    setIsActive(!isActive);
    if (!isActive) {
      setIsPlaying(false);
    }
  }

  const getTime=(time)=>{
    const min=Math.floor(time/ 60);
    const sec=time % 60;
    return `${min<10? "0"+min:min}:${sec<10? "0"+sec:sec}`;
  }

  const resetTime=()=>{
    setTime(initTime);
    setIsActive(false);
    setIsPlaying(false);
    audio.pause();
    audio.currentTime = 0;
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
