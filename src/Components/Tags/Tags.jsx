import React, { useContext } from 'react'
import './Tags.css'
import { StateContext } from '../StateProvider';

const Tags = () => {

    const {active,setActive}=useContext(StateContext);

    const handleTagClick=(index)=>{
        setActive(index);
    };

  return (
    <div className='tag-container'>
      {
        ["Work","Short Break","Long Break"].map((tag,i)=>(
            <button className={`tag ${active === i ? 'active' : ''}`} onClick={()=>handleTagClick(i)} active={active === i} key={i}>{tag}</button>
        ))
      }
    </div>
  )
}

export default Tags
