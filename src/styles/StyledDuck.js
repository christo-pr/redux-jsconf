import styled from "styled-components"

import DuckHuntSprite from "assets/img/duckhunt-sprite.png"

export const StyledDuck = styled.div`
  width: 110px;
  height: 110px;
  background: url(${DuckHuntSprite}) ${(props) => props.duckSprite[0]}px
    ${(props) => props.duckSprite[1]}px;
  background-size: 1200px;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: ${(props) => props.duckPosition}px;
  animation: bottomToTop 3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-play-state: ${(props) =>
    props.shouldAnimate ? "running" : "paused"};

  @keyframes bottomToTop {
    from {
      bottom: 0;
    }
    to {
      bottom: 100vh;
    }
  }

  @keyframes duckFalling {
    from {
      bottom: 0;
    }
  }
`
