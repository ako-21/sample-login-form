import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { onSignIn } from './SignInAPI'



export const SignIn = ({ setSignInSuccess, signInSuccess, setSignInFailure }) => {

  const [inputState, setInputState] = useState({
    email: '',
    password: ''
  })

  const [focus, setFocus] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [validation, setValidation] = useState(false)

  useEffect(() => {
    handleErrors()
    handleValidation()
  })

  const handleChange = (event) => {
    const input = event.target.name
    const value = event.target.value
    setInputState({
      ...inputState,
      [input]: value
    })
  }

  const handleErrors = () => {
    if (focus === 'email') {
      const emailString = inputState.email
      const format = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
      if (emailString.match(format)) {
        setEmailError('')
      } else {
        setEmailError('*Valid Email Required')
      }
    } 
    if (focus === 'password') {
      if (inputState.password === '') {
        setPasswordError('*Minimum 1 Character')
      } else {
        setPasswordError('')
      }
    }
  }

  const handleValidation = () => {
    if (inputState.email && inputState.password && !emailError && !passwordError) {
      setValidation(true)
    } else {
      setValidation(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSignIn(inputState)
    .then(() => setSignInSuccess(true))
    .catch((err) => setSignInFailure(true))
  }

  return (
    <React.Fragment>
      {!signInSuccess &&
      <Form data-testid='form' onSubmit={handleSubmit}>
        <Form.Group className={emailError ? 'mb-0' : 'mb-1'}>
          <Form.Control
            required
            id="emailaddress"
            type="email"
            name="email"
            value={inputState.email}
            placeholder="Email Address"
            data-testid='email'
            onChange={handleChange}
            onKeyDown={() => setFocus('email')}
          />
          <div>
            {emailError &&
            <p data-testid='email-err-msg' style={{ margin: '0', color: '#fff3e2' }}>*Valid Email Required</p>
            }
          </div>
        </Form.Group>
        <Form.Group className={passwordError ? 'mb-0' : 'mb-1'}>
          <Form.Control
            required
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            data-testid='password'
            value={inputState.password}
            onChange={handleChange}
            onKeyDown={() => setFocus('password')}
          />
          <div>
            {passwordError &&
            <p style={{ margin: '0', color: '#fff3e2' }}>*Minimum 1 Character</p>
            }
          </div>
        </Form.Group>
        <Form.Group>
          <Button disabled={!validation} style={{ width: '100%', backgroundColor: '#f3b64e' }} type='submit' data-testid='submit-button'>Submit</Button>
        </Form.Group>
      </Form>
     }
    </React.Fragment>
  )
}

export default SignIn


