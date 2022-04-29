import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

export default function Projects({ data }) {
  const { edges: projects } = data.allMdx;

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height-mobile)+1rem)] font-[Manrope] 2xl:mt-[calc(var(--header-height-2xl)+1rem)] 2xl:text-2xl">
          <ul>
            {projects.map(({ node: project }) => (
              <li key={project.id}>
                <Link to={project.slug}>
                  <h2>{project.frontmatter.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
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
          }
        }
      }
    }
  }
`;
