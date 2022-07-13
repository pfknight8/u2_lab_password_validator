import { useState } from 'react'
import '../styles/Validator.css'

const Validator = () => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState(null)
  const [passwordConfirm, setPasswordConfirm] = useState(null)
  const [valid, setValid] = useState(false)

  const collectFormInfo = (e) => {
    let formItem = e.target.value
    switch(e.target.id) {
      case "username":
        if (formItem.length > 3) {
          setValid(true)
          setUsername(formItem)
        } else {
          setValid(false)
          console.log('Invalid username!')
        }
        break
      case "password":
        if (formItem.length >= 7) {
          setPassword(formItem)
        } else {
          setValid(false)
          console.log('Invalid password!')
        }
        break
      case "passwordConfirm":
        if (formItem === password) {
          setValid(true)
          console.log('Passwords Match!')
        } else {
          setValid(false)
        }
        setPasswordConfirm(formItem)
        break
      default:
        setValid(false)
    }
  }

  const handleSubmit = (e) => {
    if (!valid) {
      alert('Invalid Submission!')
    } else {
      alert('Form Submitted Successfully!')
    }
    e.preventDefault()
  }

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" id="username" onChange={collectFormInfo} />
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" onChange={collectFormInfo}/>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm" onChange={collectFormInfo}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick={handleSubmit}>Sign Up</button>
        <p id='message'>Passwords must match.</p>
      </form>
    </div>
  )
}

export default Validator
