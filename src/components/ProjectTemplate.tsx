import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';

const shortcodes = { Link };

export default function ProjectTemplate({ data: { mdx } }) {
  return (
    <>
      <Helmet>
        <title>Projects | {mdx.frontmatter.title}</title>
      </Helmet>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <div className="">
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <button onClick={() => navigate(`/projects`)} type="button">
          <p className="text-blue-500 underline underline-offset-1">Back</p>
        </button>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
