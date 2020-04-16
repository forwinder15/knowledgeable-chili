import React from 'react';
import _ from 'lodash';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


import { Link, safePrefix } from '../utils';

export default function Header(props) {

  const data = useStaticQuery(graphql`
  query  {
    file(relativePath: {eq: "logo.jpeg"}) {
      id
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)



  return (
    <header id="masthead" className="site-header">
      <div className="inner">
        <div className="site-header-inside">
          <div className="site-branding">
            <div className="site-logo">
              <Link to={safePrefix('/')}><Img fixed={data.file.childImageSharp.fixed}
                alt="Logo" /></Link>
            </div>
            {(_.get(props, 'pageContext.frontmatter.template') === 'home') ?
              <h1 className="site-title"><Link to={safePrefix('/')}>{_.get(props, 'pageContext.site.siteMetadata.header.title')}</Link></h1>
              :
              <p className="site-title"><Link to={safePrefix('/')}>{_.get(props, 'pageContext.site.siteMetadata.header.title')}</Link></p>
            }
          </div>
          {(_.get(props, 'pageContext.menus.main') && _.get(props, 'pageContext.site.siteMetadata.header.has_nav')) && <React.Fragment>
            <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
              <div className="site-nav-inside">
                <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Menu</span><span className="icon-close"
                  aria-hidden="true" /></button>
                <ul className="menu">
                  {_.map(_.get(props, 'pageContext.menus.main'), (item, item_idx) => (
                    <li key={item_idx} className={'menu-item ' + ((_.get(props, 'pageContext.url') === _.get(item, 'url')) ? ' current-menu-item' : '')}>
                      <Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Menu</span><span className="icon-menu"
              aria-hidden="true" /></button>
          </React.Fragment>}
        </div>
      </div>
    </header>
  );
}

