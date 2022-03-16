import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <p>Home</p>
      </Layout>
    </div>
  );
}
