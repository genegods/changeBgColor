import React from 'react'
import { Routes, Route } from "react-router-dom";
import Red from '../pages/Red'
import Yellow from '../pages/Yellow'
import Blue from '../pages/Blue'
import Green from '../pages/Green'

const ColorPage = () => {
  return (
    <React.Fragment>
    <section>
      <Routes>
      <Route path="/" element={<Red />} />
      <Route path="/Yellow" element={<Yellow />} />
      <Route path="/Blue" element={<Blue />} />
      <Route path="/Green" element={<Green />} />
      </Routes>
    </section>
  </React.Fragment>
  )
}

export default ColorPage