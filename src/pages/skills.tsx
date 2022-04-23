import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

export default function Skills({ data }) {
  const mappedSkills = data.allFile.edges.map((edge) => (
    <div key={edge.node.id} className="w-[10rem] m-4">
      <img
        src={edge.node.publicURL}
        alt={`${edge.node.name.split(`-`)[0]} icon'`}
        className="w-full"
      />
      <p className="text-center underline my-1">
        {edge.node.name.split(`-`)[0]}
      </p>
    </div>
  ));
  return (
    <>
      <Helmet>
        <title>Skills</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height)+1rem)] mb-1 font-[Manrope]">
          <div className="flex flex-wrap">{mappedSkills}</div>
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query AllSkills {
    allFile(filter: { relativeDirectory: { eq: "skills" } }) {
      edges {
        node {
          id
          name
          relativePath
          publicURL
        }
      }
    }
  }
`;
