import React from 'react'
import Terminal from './terminalComp'
import '../components/terminalComp/index.css'

const SplashScreen = () => {
  return (
    <div className='flex h-screen justify-center items-center container-splash overflow-hidden'>
      <Terminal/>
    </div>
  )
}

export default SplashScreen
