import React from 'react'
import Navbar from "../UI/Navbar"
import AirtimeStatusBar from '../components/Airtime/AirtimeStatusBar'

const Airtime = () => {
  return (
    <div>
      <Navbar title="Airtime to Cash"/>
      <AirtimeStatusBar/>
    </div>
  )
}

export default Airtime