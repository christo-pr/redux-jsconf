import styled, { createGlobalStyle } from "styled-components"

// Grid
import {
  Container as RAWContainer,
  Row as RAWRow,
  Col as RawCol,
} from "react-awesome-styled-grid"
// Fonts
import font from "assets/fonts/PressStart2P-Regular.ttf"
import Cursor1 from "assets/img/cursor-1.png"

export const Container = styled(RAWContainer)``

export const Row = styled(RAWRow)``

export const Col = styled(RawCol)``

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: PressStart2P;
      src: url(${font});
    }

    html {
      cursor: url(${Cursor1}), auto;
    }

    body {
      overflow: hidden;
      * {
        font-family: PressStart2P;
      }
    }
`
