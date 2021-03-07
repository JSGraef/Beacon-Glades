import React from "react"
import Layout from "../Layout.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'


export default function CourseMap() {

  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "coursemap.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <Layout>
      <Img fluid={data.file.childImageSharp.fluid} alt="Course Map" />
    </Layout>
  )
}
