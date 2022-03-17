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
        <div className="my-[5%]">
          <div>Github: github.com/yasinnkhann</div>
          <div>LinkedIn: linkedin.co/yasinnkhann</div>
          <div>Email: yasinkhan500@gmail.com</div>
          <div>Instagram: yasinnkhann</div>
        </div>
      </Layout>
    </>
  );
}
