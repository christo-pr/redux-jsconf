import styled from "styled-components"

export const StyledCounter = styled.div`
  border-style: outset;
  border: 5px solid ${props => (props.active ? "#E94F37" : "#f6f7eb")};
  width: 20%;
  align-self: center;
  margin-bottom: 3rem;
  background: black;
  padding: 1rem;
  font-size: 35px;
  text-align: center;
`
