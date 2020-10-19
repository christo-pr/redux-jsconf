import React from "react"

import SuccessImg from "assets/img/done.png"
import FailImg from "assets/img/fail.png"
import { StyledAlert } from "styles/"

export function Alert(props) {
  const { show, type } = props

  return (
    <StyledAlert show={show}>
      <img src={type !== "success" ? FailImg : SuccessImg} width="200" />
    </StyledAlert>
  )
}
