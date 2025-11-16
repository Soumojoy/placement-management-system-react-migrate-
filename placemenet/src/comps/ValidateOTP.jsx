import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'


function ValidateOTP() {
    const [otp, setOtp]= useState("")
    const location = useLocation();
    const {userId} = location.state || {};

    
    const handleOTP= (e)=>{
setOtp(e.target.value)
console.log(userId)
console.log(otp)
    }
  return (
    <>
    <div>ValidateOTP for this num: {userId}</div>
    <input type='text' value={otp} onChange={handleOTP} placeholder='enter otp'/>
    </>
  )
}

export default ValidateOTP