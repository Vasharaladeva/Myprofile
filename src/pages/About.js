import React from "react"
import { Text, TextWrapper } from "../components/shared/TextWrapper"
import { SkillWrapper, Items, SkillItem } from "../components/shared/Skill"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          stacks
        }
      }
    }
  `)
  return (
    <>
      <TextWrapper>
        <Text>
          Hello, My name is Brayam Rocabado, and I'm a web design
          , full stack web developer with a passion for metrics and beating former "best-yets
          . Consistently receive high user experience scores for all web development projects, Passionate about building world class web applications.
           
        </Text>
      </TextWrapper>
      <SkillWrapper>
        <h4>Current Dev Stack</h4>
        <Items>
          {data.site.siteMetadata.stacks.map(stack => (
            <SkillItem key={stack}>{stack}</SkillItem>
          ))}
        </Items>
      </SkillWrapper>
    </>
  )
}
export default About
