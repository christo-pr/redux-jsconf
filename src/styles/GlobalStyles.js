import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

// Grid
import {
  Container as RAWContainer,
  Row as RAWRow,
  Col as RawCol,
} from "react-awesome-styled-grid"
// Fonts
import PressStart from "assets/fonts/PressStart2P-Regular.ttf"

export const Container = styled(RAWContainer)``

export const Row = styled(RAWRow)``

export const Col = styled(RawCol)``

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Press Start 2P';
        src: local('Press Start 2P'), local('Press Start 2P'),
        url(${PressStart}) format('ttf');
        font-style: normal;
    }

    body {
      * {
        font-family: 'Press Start 2P';
      }
    }
`
