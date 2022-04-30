import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Projects({ data }) {
  const { edges: projects } = data.allMdx;
  return (
    <>
      {console.log(projects)}
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height-mobile)+1rem)] font-[Manrope] 2xl:mt-[calc(var(--header-height-2xl)+1rem)] 2xl:text-2xl">
          <div className="grid grid-rows-2 grid-cols-2 gap-x-4 gap-y-4">
            {projects.map(({ node: project }) => (
              <Link to={project.slug}>
                <div key={project.id} className="">
                  <GatsbyImage
                    image={
                      project.frontmatter.thumbnail.childImageSharp
                        .gatsbyImageData
                    }
                    alt={project.frontmatter.title}
                  />
                  <h2 className="text-center">{project.frontmatter.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query projectIndex {
    allMdx {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  transformOptions: { cropFocus: CENTER, fit: COVER }
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`;
