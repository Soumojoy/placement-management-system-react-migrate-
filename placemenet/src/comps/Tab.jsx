import React from 'react'
import '../styles/tab.css'
import { Link } from "react-router-dom";

function Tab(props) {

  return (
   <>

   {/*  */}
    <div className='tab-card'>
    
  <Link to={`/${props.name}`}>
    {props.name}
  </Link>
</div>


   </>
  )
}

export default Tab