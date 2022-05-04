import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import Carousel from './Carousel';

const shortcodes = { Link, navigate };

export default function ProjectTemplate({ data }) {
  const innerContent = data.file.internal.content;
  const mappedTechStacks = JSON.parse(innerContent).techStacks.map(
    techStackSrc => (
      <div>
        <img src={techStackSrc} alt="" />
      </div>
    ),
  );
  console.log(mappedTechStacks);
  const carouselImgs = data.allFile.edges.map(
    ({ node }) => node.childImageSharp.gatsbyImageData,
  );
  return (
    <>
      <Helmet>
        <title>Projects | {data.mdx.frontmatter.title}</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height-mobile)+1rem)] font-[Manrope] 2xl:mt-[calc(var(--header-height-2xl)+1rem)] 2xl:text-2xl">
          <h1>{data.mdx.frontmatter.title}</h1>
          <div className="">
            <MDXProvider components={shortcodes}>
              <MDXRenderer frontmatter={data.mdx.frontmatter}>
                {data.mdx.body}
              </MDXRenderer>
            </MDXProvider>
          </div>
          <Carousel images={carouselImgs} />
          <div>
            <a
              href={data.mdx.frontmatter.link}
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
          </div>
          <div>
            <a
              href={data.mdx.frontmatter.repo}
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
          {mappedTechStacks}
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
  query ProjectQuery(
    $id: String
    $carouselPhotosDir: String
    $techStackPath: String
  ) {
    mdx(id: { eq: $id }) {
      id
      body
      slug
      frontmatter {
        title
        link
        repo
        carouselPhotosDir
        techStackPath
      }
    }
    allFile(filter: { relativeDirectory: { eq: $carouselPhotosDir } }) {
      edges {
        node {
          id
          name
          base
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              transformOptions: { cropFocus: CENTER, fit: COVER }
            )
          }
        }
      }
    }
    file(relativePath: { eq: $techStackPath }) {
      id
      name
      base
      internal {
        content
      }
    }
  }
`;
