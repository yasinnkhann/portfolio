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
      className="rounded-full bg-gray-200 m-4 w-[5rem] h-[5rem] text-base sm:w-[7rem] sm:h-[7rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] 2xl:w-[18rem] 2xl:h-[18rem]"
    >
      <img
        className="w-full"
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
        <section className="mt-[calc(var(--header-height)+1rem)] mb-1 font-[Manrope]">
          <div
            className="grid grid-cols-[1fr_1fr_1fr] justify-items-center sm:absolute sm:justify-items-start sm:animate-run md:animate-run lg:animate-run xl:animate-run
          2xl:animate-run"
          >
            {mappedSkills}
          </div>
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
