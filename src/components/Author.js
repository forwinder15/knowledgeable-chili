import React from "react";
import _ from 'lodash';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Link, safePrefix } from '../utils';

export default function Author(props) {

  const data = useStaticQuery(graphql`
        query  {
          file(relativePath: {eq: "family photo.jpg"}) {
            id
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        `)

  return (
    <div className='avatar' >
      <div>
        <Link to={safePrefix('/about')}><Img className="jas" fluid={data.file.childImageSharp.fluid}
          alt="Logo" /></Link>
      </div>
      <h2 className="author">{_.get(props, 'pageContext.site.data.author.name')}</h2>
      <p className="note">{_.get(props, 'pageContext.site.data.author.email')}
      </p>
    </div>
  );
}


