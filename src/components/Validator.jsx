// import { useState } from 'react'
import '../styles/Validator.css'

const Validator = (props) => {

  let pClassName = ''
  if (props.valid) {
    pClassName = 'valid'
  } else {
    pClassName = 'invalid'
  }

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" id="username" onChange={props.collectFormInfo} />
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" onChange={props.collectFormInfo}/>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm" onChange={props.collectFormInfo}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick={props.handleSubmit}>Sign Up</button>
        <p id='message' className={pClassName}>Passwords must match.</p>
        {/* <button type="cancel">X</button> */}
      </form>
    </div>
  )
}

export default Validator
