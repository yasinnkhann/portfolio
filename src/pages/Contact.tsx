import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Layout>
        <section className="my-[calc(2.5rem+1rem)]">
          <div>Github: github.com/yasinnkhann</div>
          <div>LinkedIn: linkedin.co/yasinnkhann</div>
          <div>Email: yasinkhan500@gmail.com</div>
          <div>Instagram: yasinnkhann</div>
        </section>
      </Layout>
    </>
  );
}
