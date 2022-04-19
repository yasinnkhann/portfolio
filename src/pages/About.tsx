import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Layout>
        <section>
          My name is Yasin Khan and I&apos;m a software engineer based in the
          San Diego County!
        </section>
      </Layout>
    </>
  );
}
