import { useState } from "react"
import Model from "./Components/Model/Model";
import './App.css'
import Tags from "./Components/Tags/Tags";
import Timer from "./Components/Timer/Timer";
import { FaCog } from "react-icons/fa";


function App() {
  const [isOpen,setIsOpen]=useState(false);

  const onClose=()=>{
    setIsOpen(false);
  }
  const onOpen=()=>{
    setIsOpen(true);
  }
  
  return (
    <>
      <Model isOpen={isOpen} onClose={onClose}/>
      <h1 className="title">Pomodoro</h1>
      <Tags/>
      <Timer/>

      <div className="cog-open" onClick={onOpen}>
        <FaCog/>
      </div>
    </>
  )
}

export default App
