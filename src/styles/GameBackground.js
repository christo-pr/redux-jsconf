import styled from "styled-components"
import GameBackgroundImg from "assets/img/background-game.png"
import DuckHuntBackground from "assets/img/duck-hunt-background.png"

export const GameBackground = styled.div`
  background-image: url(${DuckHuntBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  color: white;
`
