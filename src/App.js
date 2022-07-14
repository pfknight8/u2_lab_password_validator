import { useState } from 'react'
import Validator from "./components/Validator"

const App = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState(null)
  const [passwordConfirm, setPasswordConfirm] = useState(null)
  const [valid, setValid] = useState(false)

  const collectFormInfo = (e) => {
    let formItem = e.target.value
    switch(e.target.id) {
      case "username":
        if (formItem.length > 3) {
          setUsername(formItem)
        } else {
          setUsername('')
          console.log('Invalid username!')
        }
        break
      case "password":
        if (formItem.length >= 7) {
          setPassword(formItem)
        } else {
          setPassword(null)
          // console.log('Invalid password!')
        }
        break
      case "passwordConfirm":
        if (formItem === password) {
          console.log('Passwords Match!')
        } else {
          console.log('No match!')
        }
        setPasswordConfirm(formItem)
        break
      default:
        setValid(false)
    }
    if (username !== '' && password === passwordConfirm && password !== null) {
      setValid(true)
    } else {
      setValid(false)
      console.log('No!')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!valid) {
      alert('Invalid Submission!')
    } else {
      alert('Form Submitted Successfully!')
    }
  }

  return (
    <Validator valid={valid} handleSubmit={handleSubmit} collectFormInfo={collectFormInfo} />
  )
}

export default App
