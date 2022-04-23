import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height)+1rem)] mb-1 font-[Manrope]">
          These are my skills
        </section>
      </Layout>
    </>
  );
}
