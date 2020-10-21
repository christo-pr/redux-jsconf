import styled from "styled-components"

import ButtonImg from "assets/img/start.png"

export const StartButton = styled.button`
  padding: 1rem;
  background: green;
  color: white;
  width: 100%;
  align-self: center;
  margin-top: 20%;
  background: url(${ButtonImg});
  background-repeat: no-repeat;
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  height: 150px;

  &:focus,
  &:active,
  &:hover {
    cursor: inherit;
    outline: 0;
  }

  &:active {
    transform: scale(0.95);
  }
`
