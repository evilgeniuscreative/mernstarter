import { useState } from "react"

const defaultState = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  error: ''
}

export default function SignupForm() {
  const [formData, setFormData] = useState(defaultState)

  const {
    name,
    email,
    password,
    confirm,
    error
  } = formData

  // handler functions

  const handleChnage = evt => {
    const { name, value } = evt.target

    // copy the exisint state, then update the copy
    // with whatever is chaning.
    // if a person is typing then they really are dealign with the errors

    const newFormData = {
      ...formData,
      [name]: value,
      error: '' // clear the error
    }

    setFormData(newFormData)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('formData', formData)

  }

  const disable =  password !== confirm || !password || !email || !name

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input required type="text" name="name" value={name} onChange={handleChnage} />

        <label htmlFor="email">Email</label>
        <input required type="email" name="email" value={email} onChange={handleChnage} />

        <label htmlFor="password">Password</label>
        <input required type="password" name="password" value={password} onChange={handleChnage} />

        <label htmlFor="confirm">Confirm Password</label>
        <input required type="password" name="confirm" value={confirm} onChange={handleChnage} />

        <button disabled={disable} type="submit">Sign Up</button>
      </form>
      <p className="error-message">&nbsp; {error}</p>
    </div>
  )
}
