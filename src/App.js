import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Path from './Path'
import './Sass/style.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Path />
      </BrowserRouter>
    </>
  )
}

export default App
