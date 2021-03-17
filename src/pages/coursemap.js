import React from "react"
import Layout from "../Layout.js"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function CourseMap() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "coursemap.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <Layout>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="Course Map"
      />
    </Layout>
  )
}
