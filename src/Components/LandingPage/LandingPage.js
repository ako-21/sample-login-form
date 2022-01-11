import React, { useState } from 'react'
import './LandingPage.css'
import SignIn from './SignIn/SignIn'

const LandingPage = () => {
  const [signInSuccess, setSignInSuccess] = useState('')
  const [signInFailure, setSignInFailure] = useState('')
  return (
    <div className="landing-page">
      <div className="d-flex flex-column justify-content-evenly align-items-center" style={{ height: '50%' }}>
        {!signInSuccess && signInFailure &&
        <div style={{ width: '100%', textAlign: 'center', borderRadius: '.25rem', padding: '.4rem 0 .4rem 0', color: '#fff3e2', fontWeight: 'bold', fontSize: '1.5rem' }}>Invalid Credentials, Try Again</div>
        }
        {!signInSuccess && !signInFailure &&
        <div style={{ width: '100%', textAlign: 'center', borderRadius: '.25rem', padding: '.4rem 0 .4rem 0', color: '#fff3e2', fontWeight: 'bold', fontSize: '1.5rem' }}>Sign In</div>
        }
        {signInSuccess &&
        <div style={{ width: '100%', textAlign: 'center', borderRadius: '.25rem', padding: '.4rem 0 .4rem 0', color: '#fff3e2', fontWeight: 'bold', fontSize: '1.5rem' }}>You are now signed in!</div>
        }
        <div style={{ width: '70%' }}>
          <SignIn signInFailure={signInFailure} signInSuccess={signInSuccess} setSignInSuccess={setSignInSuccess} setSignInFailure={setSignInFailure}></SignIn>
        </div>
      </div>
    </div>
  )
}

export default LandingPage