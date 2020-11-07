import React from "react"
import styled from "@emotion/styled"
import Navigation from "./Navigation.js"

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`

export default function Layout({ children }) {
  return (
    <Container>
      <div>
        <Navigation />
      </div>
      <div>{children}</div>
    </Container>
  )
}
