import React from 'react'
import { Link } from "react-router-dom";
import LoginForm from '../comps/LoginForm';
import SignupForm from '../comps/SignupForm';
import Login from './Login';

function Student() {
  return (
       <>
       
       <div>
<Link to="/">home</Link>

   </div>
    <div>Student</div>
    <SignupForm/>
   <Login/>
       </>
  )
}

export default Student