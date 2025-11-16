import React from 'react'
import LoginForm from '../comps/LoginForm'

function Login(props) {
  return (
    <div>Login as {props.name}
    <LoginForm/>
    </div>
  )
}

export default Login