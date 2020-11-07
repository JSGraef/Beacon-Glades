import React from "react"
import styled from "@emotion/styled"
import Navigation from "./Navigation.js"

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  justify-items: start;
  justify-content: start;
  align-content: flex-start;
  height: 90vh;
  margin: 0;
  padding: 0;
`

const Nav = styled.div`
  list-style-type: none;
  padding: 12px;
  margin: 0;
`

const Map = styled.div`
  min-height: 100%;
  width: 100%;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Nav>
        <Navigation />
      </Nav>
      <Map>{children}</Map>
    </Container>
  )
}
