import React from 'react'
import Navbar from './Navbar'
import ColorPage from "./ColorPage";

const MainPage = () => {
  return (
    <React.Fragment>
    <section className="relative md:w-2/5 md:mx-auto">
      <div className='absolute top-1/2 left-3 md:left-20'>
          <Navbar/>
      </div>

      <div>
          <ColorPage/>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage