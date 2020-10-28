import React from "react"
import "normalize.css"

import "./App.css"
import { GlobalStyles } from "styles/"

import { ReducksHunt } from "views/"

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <ReduxMonsters /> */}
      <ReducksHunt />
    </>
  )
}

export default App
