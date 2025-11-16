import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function LoginForm() {
  const [userId, setUserId] = useState("");

  // 👉 Validation logic BEFORE return
  const firstDigit = userId.charAt(0);
  const validStart = ["6", "7", "8", "9"].includes(firstDigit);
  const validLength = userId.length === 10;

  const numEligible = validStart && validLength;

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  }

  return (
    <>

    
      <input 
        value={userId} 
        onChange={handleInputChange} 
        type="text" 
        placeholder='userId' 
      />

      {numEligible ? (
        <Link 
          to="/validateotp"
          state={{ userId: userId }}
        >
          <button>Send OTP</button>
        </Link>
      ) : (
        <button disabled>Send OTP false</button>
      )}
    </>
  )
}

export default LoginForm;
