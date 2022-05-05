import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import loadable from '@loadable/component';

const Layout = loadable(() => import(`@/components/Layout`));

export default function Projects({ data: { allMdx } }) {
  const { edges: projects } = allMdx;
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height-mobile)+1rem)] font-[Manrope] 2xl:mt-[calc(var(--header-height-2xl)+1rem)] 2xl:text-2xl">
          <div className="grid grid-rows-2 grid-cols-2 justify-items-center items-end">
            {projects.map(({ node: project }) => (
              <Fragment key={project.id}>
                <Link to={project.slug}>
                  <div className="p-4 lg:p-8">
                    <GatsbyImage
                      className="border-[3px] border-orange-300 rounded-lg hover:border-orange-600"
                      image={
                        project.frontmatter.thumbnail.childImageSharp
                          .gatsbyImageData
                      }
                      alt={project.frontmatter.title}
                    />
                    <h2 className="text-center mt-2">
                      {project.frontmatter.title}
                    </h2>
                  </div>
                </Link>
              </Fragment>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query ProjectIndex {
    allMdx(sort: { order: ASC, fields: frontmatter___order }) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
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
