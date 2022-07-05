import React from 'react'

function SignUp() {
  return (
    <div>
            <div className='signUp modal'>
        <h3>SignUp</h3>
        <form>
            <input type="text" name="username" id="username" placeholder="Username..."/>
            <input type="email" name="email" id="email" placeholder="Email..."/>
            <input type="password" name="password" id="password" placeholder="Password..."/>
            <input type="password" name="confirm" id="confirm" placeholder="Confirm Password..."/>
            <input type="submit" />
        </form>

    </div>
    </div>
  )
}

export default SignUp