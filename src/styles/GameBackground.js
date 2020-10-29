import styled from "styled-components"
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
