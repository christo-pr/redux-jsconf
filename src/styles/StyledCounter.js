import styled from "styled-components"

import ScoreImg from "assets/img/score-border.png"

export const StyledCounter = styled.div`
  align-self: center;
  font-size: 35px;
  text-align: center;
  background: white;
  color: black;
  width: 120px;
  margin-bottom: 3rem;

  p {
    background: url(${ScoreImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    height: 70px;
    line-height: 70px;
  }
`
