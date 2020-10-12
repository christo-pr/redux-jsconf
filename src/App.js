import React from "react"
import "normalize.css"

import "./App.css"
import { GlobalStyles } from "styles/"

import { Board } from "views/"

function App() {
  return (
    <>
      <GlobalStyles />
      <Board />
    </>
  )
}

export default App
