import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';
import Layout from './Layout';

const shortcodes = { Link, navigate };

export default function ProjectTemplate({ data: { mdx } }) {
  return (
    <>
      <Helmet>
        <title>Projects | {mdx.frontmatter.title}</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height-mobile)+1rem)] font-[Manrope] 2xl:mt-[calc(var(--header-height-2xl)+1rem)] 2xl:text-2xl">
          <h1>{mdx.frontmatter.title}</h1>
          <div className="">
            <MDXProvider components={shortcodes}>
              <MDXRenderer frontmatter={mdx.frontmatter}>
                {mdx.body}
              </MDXRenderer>
            </MDXProvider>
          </div>
          <a href={mdx.frontmatter.repo} target="_blank" rel="noreferrer">
            Github Repo
          </a>
          <button
            onClick={() => navigate(`/projects`)}
            type="button"
            className="fixed top-[calc(var(--header-height-mobile)-1rem)] 2xl:top-[calc(var(--header-height-2xl)-1rem)] right-0 m-4 p-4"
          >
            <p className="text-blue-500 underline underline-offset-1">Back</p>
          </button>
        </section>
      </Layout>
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
        repo
      }
    }
  }
`;
