import React from 'react'
import OwnTheZone from './pages/franchising/ownthezone/ownthezone'
import Navbar from './pages/navbar/navbar'
import Whywing from './pages/franchising/why/whywing'
import About from './pages/franchising/about/about'
// import Specials from './pages/wingplaza/specials'
// import Wingermeals from './pages/wingplaza/wingermeals'
// import Address from './pages/wingplaza/address'
// import Header from './pages/wingplaza/header'

function App() {
  return (
    <div>
      {/* <Header />
      <Address />
      <Specials />
      <Wingermeals /> */}
      <About />
      <Whywing />
      <Navbar />
      <OwnTheZone />
    </div>
  )
}

export default App