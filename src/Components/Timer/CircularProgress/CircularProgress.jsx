import React, { useContext, useEffect} from 'react'
import './CircularProgress.css'
import Clock from './Clock/Clock';
import { StateContext } from '../../StateProvider';

const CircularProgress = () => {

    const {progress,setProgress,time,initTime}=useContext(StateContext);

    useEffect(()=>{
      setProgress(time/(initTime/100));
    },[setProgress,time])

  return (
    <div className='outer-circle' style={{ "--progress": `${progress}%` }}>
      <div className="inner-circle">
        <Clock/>
      </div>
    </div>
  )
}

export default CircularProgress
