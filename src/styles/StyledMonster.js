import styled from "styled-components"

import Cursor2 from "assets/img/cursor-2.png"

export const StyledMonster = styled.img`
  border: 10px solid white;
  border-style: outset;
  border: 10px solid;
  border-image-source: linear-gradient(45deg, #1f1f1f, #666);
  border-image-slice: 1;
  min-height: 500px;
  background: white;

  &:hover {
    cursor: url(${Cursor2}), auto;
    border-image-source: linear-gradient(45deg, #f6ae2d, #fbda9d);
  }
`
