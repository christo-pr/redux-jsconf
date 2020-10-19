import styled from "styled-components"
import GunImg from "assets/img/gun.png"

export const StyledGun = styled.div`
  background-image: url(${GunImg});
  height: 200px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 0;
  width: 250px;
`
