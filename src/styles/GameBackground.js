import styled from "styled-components"
import GameBackgroundImg from "assets/img/background-game.png"

export const GameBackground = styled.div`
  background-image: url(${GameBackgroundImg});
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  color: white;
`
