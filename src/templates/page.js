import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact } from '../utils';
import MyImgPage from '../components/MyImgPage';

export default function Post(props) {
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
          <MyImgPage {...props} />
        </div>

        <div className="post-content">
          {htmlToReact(_.get(props, 'pageContext.html'))}
        </div>
      </article>
    </Layout>
  );
}

