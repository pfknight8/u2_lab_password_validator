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
        }
        break
      case "password":
        if (formItem.length >= 7) {
          setPassword(formItem)
        } else {
          setPassword(null)
        }
        break
      case "passwordConfirm":
        if (formItem === password) {
        } else {
        }
        setPasswordConfirm(formItem)
        break
      default:
        setValid(false)
    }
    if (password !== null && password === passwordConfirm && username !== '') {
      setValid(true)
    } else {
      setValid(false)
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
    <Validator valid={valid} handleSubmit={(e) => handleSubmit(e)} collectFormInfo={(e) => collectFormInfo(e)} />
  )
}

export default App
