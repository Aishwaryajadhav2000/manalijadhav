import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Eductaion from './components/Eductaion'
import WrestlingCert from './components/WrestlingCert'
import SumoCert from './components/SumoCert'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <section className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#7c3f58] px-2 lg:px-20"> */}
      <section className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#312c70] to-[#ce404c] px-2 lg:px-20">

        <Header />

        {/* <Introduction></Introduction>

        <SumoCert></SumoCert>

        <WrestlingCert></WrestlingCert>

        <Eductaion></Eductaion> */}

        <Outlet></Outlet>
      </section>
    </>
  )
}

export default App
