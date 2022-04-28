import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

export default function Project({ data }) {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height-mobile)+1rem)] mb-1 font-[Manrope] 2xl:mt-[calc(var(--header-height-2xl)+1rem)]">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </Layout>
    </>
  );
}
