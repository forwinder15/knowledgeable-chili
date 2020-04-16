import React from 'react';
import _ from 'lodash';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import {Layout} from '../components/index';
import {htmlToReact } from '../utils';

export default function Contact(props) {

    const data = useStaticQuery(graphql`
        query  {
          file(relativePath: {eq: "contact.jpg"}) {
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
            <Layout {...props}>
            <article className="post page post-full">
              <header className="post-header">
                <h1 className="post-title">{_.get(props, 'pageContext.frontmatter.title')}</h1>
              </header>
              {_.get(props, 'pageContext.frontmatter.subtitle') && 
              <div className="post-subtitle">
                {htmlToReact(_.get(props, 'pageContext.frontmatter.subtitle'))}
              </div>
              }
              <div className="post-thumbnail">
                <Img className="thumbnail" fluid={data.file.childImageSharp.fluid} alt='Contact us' />
              </div>
              <div className="post-content">
                {htmlToReact(_.get(props, 'pageContext.html'))}
                <form name="contactForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="contact-form"
                  className="contact-form">
                  <p className="screen-reader-text">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <p className="form-row">
                    <label className="form-label">Name *</label>
                    <input type="text" name="name" placeholder="Your name..." className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" placeholder="Your email address..." className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label className="form-label">Message *</label>
                    <textarea name="message" placeholder="Your message..." className="form-textarea" rows="7" />
                  </p>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <p className="form-row">
                    <button type="submit" className="button">Send Message</button>
                  </p>
                </form>
              </div>
            </article>
            </Layout>
        );
    }

