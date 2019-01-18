import React, { Fragment } from "react"
// import { MediaQuery, useMediaQuery } from "@tekktekk/react-flip-move"
import styled from "styled-components"

const Status = styled.div<{ matches: boolean }>`
  margin: 10px;
  background: ${({ matches }) => (matches ? "lightgreen" : "tomato")};
`

export default class DevDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Demo</h1>
      </div>
    )
  }
}
