import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height-mobile)+1rem)] font-[Manrope] 2xl:mt-[calc(var(--header-height-2xl)+1rem)] 2xl:text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sint
          porro tempore, dolores repudiandae voluptates tenetur nostrum!
          Possimus dolorem laboriosam iure, ipsum vero, commodi, fuga sunt
          corporis unde provident omnis?
        </section>
      </Layout>
    </>
  );
}
