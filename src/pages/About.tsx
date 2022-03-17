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
        <div className="my-[5%]">Hey</div>
      </Layout>
    </>
  );
}
