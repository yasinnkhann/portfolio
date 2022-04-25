import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

export default function Skills({ data }) {
  const multipleWordsExceptions = {
    'react-testing-library': true,
  };

  const mappedSkills = data.allFile.edges.map((edge) => (
    <div
      key={edge.node.id}
      className="rounded-full bg-gray-200 m-11 w-[var(--skill-photo-size-mobile)] h-[var(--skill-photo-size-mobile)] sm:w-[var(--skill-photo-size-sm)] sm:h-[var(--skill-photo-size-sm)] md:w-[var(--skill-photo-size-md)] md:h-[var(--skill-photo-size-md)] lg:w-[var(--skill-photo-size-lg)] lg:h-[var(--skill-photo-size-lg)] xl:w-[var(--skill-photo-size-xl)] xl:h-[var(--skill-photo-size-xl)] 2xl:w-[var(--skill-photo-size-2xl)] 2xl:h-[var(--skill-photo-size-2xl)]"
    >
      <img
        className="w-full hover:animate-spin-slow"
        src={edge.node.publicURL}
        alt={
          !multipleWordsExceptions[edge.node.name]
            ? `${edge.node.name.split(`-`)[0]} icon`
            : `${edge.node.name.split(`-`).join(` `)} icon`
        }
      />
      <p className="text-center underline my-1">
        {!multipleWordsExceptions[edge.node.name]
          ? `${edge.node.name.split(`-`)[0]}`
          : `${edge.node.name.split(`-`).join(` `)}`}
      </p>
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>Skills</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height)+1rem)] font-[Manrope]">
          <div className="grid grid-cols-[1fr_1fr] justify-items-center sm:grid-cols-[1fr_1fr_1fr] sm:absolute sm:justify-items-start sm:animate-runSM md:absolute md:justify-items-start md:animate-runMD lg:grid-cols-[1fr_1fr_1fr_1fr] lg:absolute lg:justify-items-start lg:animate-runLG xl:absolute xl:justify-items-start xl:animate-runXL 2xl:absolute 2xl:justify-items-start 2xl:animate-run2XL">
            {mappedSkills}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query AllSkills {
    allFile(
      filter: { relativeDirectory: { eq: "skills" } }
      sort: { fields: name, order: ASC }
    ) {
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
