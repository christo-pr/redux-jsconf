import React from "react"
import "normalize.css"

import "./App.css"
import { GlobalStyles } from "styles/"

import { ReduxMonsters } from "views/"

function App() {
  return (
    <>
      <GlobalStyles />
      <ReduxMonsters />
    </>
  )
}

export default App
