import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';
import { navigate } from 'gatsby';

const shortcodes = { Link }; // Provide common components here

export default function ProjectTemplate({ data: { mdx } }) {
  return (
    <>
      <Helmet>
        <title>Projects | {mdx.frontmatter.title}</title>
      </Helmet>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <br />
        <br />
        <br />
        <div className="bg-red-500">
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <button onClick={() => navigate(`/projects`)} type="button">
          <p className="text-blue-500 underline">Back</p>
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
