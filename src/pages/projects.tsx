import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(2.5rem+1rem)] font-[Manrope]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sint
          porro tempore, dolores repudiandae voluptates tenetur nostrum!
          Possimus dolorem laboriosam iure, ipsum vero, commodi, fuga sunt
          corporis unde provident omnis?
        </section>
      </Layout>
    </>
  );
}
