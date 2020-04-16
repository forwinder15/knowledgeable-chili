import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import _ from 'lodash';


function renderImage(file) {
  return <Img className="thumbnail" fluid={file.node.childImageSharp.fluid} alt={file.node.title} />
}
const MyImg = function (props) {
  return <StaticQuery
    query={graphql`
      query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    }
    `}
    render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === props.pageContext.frontmatter.content_img_path))}
  />
}
export default MyImg;