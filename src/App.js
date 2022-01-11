import React from 'react'
import Header from './Components/Header/Header'
import LandingPage from './Components/LandingPage/LandingPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Header></Header>
        <React.Fragment>
          <LandingPage></LandingPage>
        </React.Fragment>
      </div>
    </div>
  )
}

export default App;
