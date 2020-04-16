import React from 'react';
import _ from 'lodash'

import { Layout } from '../components/index';
import { htmlToReact } from '../utils';
import MyImg from '../components/MyImg';



export default function Post(props) {

  console.log(props.pageContext.frontmatter.content_img_path)
  return (
    <Layout {...props}>
      <article className="post post-full">
        <header className="post-header">
          <div className="post-meta">
          </div>
          <h1 className="post-title">{_.get(props, 'pageContext.frontmatter.title')}</h1>
        </header>
        {_.get(props, 'pageContext.frontmatter.subtitle') &&
          <div className="post-subtitle">
            {htmlToReact(_.get(props, 'pageContext.frontmatter.subtitle'))}
          </div>
        }
        <div className="post-thumbnail">
          <MyImg {...props} />
        </div>

        <div className="post-content">
          {htmlToReact(_.get(props, 'pageContext.html'))}
        </div>
      </article>
    </Layout>
  );
}
