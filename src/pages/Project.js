import React from "react"
import styled from "styled-components"
import Card from "../components/shared/Card"
import { breakpoints } from "../components/shared/Media"
import { TitleComponent, StyledText } from "../components/shared/TextWrapper"

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 70%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 20px;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobileMax}) {
    max-width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`
const Project = () => {
  return (
    <StyledRoot>
      <TitleComponent>Project</TitleComponent>
      <StyledText>Some of my work</StyledText>
      <StyledContainer>
        <Card
          photo={require("../images/programming.svg")}
          title="Freelancing"
          description="Using development tools such as Bootstrap, Gatsby, Next Js, React, Redux, components were created for the
          website, a Navbar was also created using React Router as a tool to connect to their respective sub-
          pages. A CRUD was also created to be able to register the user and make inquiries with the database.
          In this project, Mongo DB and Robo Mongo were used as a non-relational database.
          In the back end, Node Express was used to query the server.
          This projects are carried out with availability of open time and dedication.
          Developing the main web page and templates for future projects. It was relevant being part of this
          group of ITs sharing knowledge and growing as a developer, giving such a great brainstorm of ideas
          with a fresh touch. It benefited the client on renewing its image and satisfying its prospect."
        />
        <Card
          photo={require("../images/thinking.png")}
          title="Awaken Tours"
          description="    Built an Tour webapp to sell tours online. Increased company sales by 58%.
          Designed a customer web form for a local Tour office. Increased customer satisfaction scores by 30%.
          . Boosted streaming sales by 60%.
          "
        />
      </StyledContainer>
    </StyledRoot>
  )
}
export default Project
