import { createGlobalStyle } from "styled-components"

// Fonts
import PressStart from "assets/fonts/PressStart2P-Regular.ttf"

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
