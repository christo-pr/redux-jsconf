import styled from "styled-components"

export const StyledAlert = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
`
