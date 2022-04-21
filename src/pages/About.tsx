import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height)+1rem)] font-[Manrope] grid grid-rows-3 grid-cols-2">
          <div className="mx-1">
            Welcome to my page! My name is Yasin Khan and I&apos;m a software
            engineer based in the San Diego County!
          </div>
          <div className="mr-1">
            <StaticImage src="../assets/photo-in-favela.JPG" alt="me in rio" />
          </div>
        </section>
      </Layout>
    </>
  );
}
