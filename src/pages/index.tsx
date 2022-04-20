import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <section className="font-[Manrope] mt-[calc(2.5rem+1rem)]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          ullam, magnam unde earum nesciunt sequi eveniet suscipit rem alias,
          sint modi dignissimos exercitationem ducimus nisi, omnis reiciendis
          fugit iure? Amet! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Veniam minima porro error adipisci ad incidunt, corporis debitis
          cumque commodi aliquid libero! Delectus iusto voluptatum repudiandae
          cum aliquid? Inventore, expedita cum. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Error, deserunt odio pariatur minima
          natus praesentium delectus ab, laboriosam dolore alias perspiciatis
          debitis illo facilis assumenda corrupti! Natus repudiandae expedita
          nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
          facere aliquam est numquam sit debitis inventore quasi saepe, corrupti
          animi! Exercitationem cupiditate magnam, fuga voluptatem excepturi est
          enim? Exercitationem, beatae! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Saepe quae voluptatibus corrupti eligendi nulla
          deleniti, quibusdam quod sit! Quam ipsam labore aliquid debitis totam
          voluptates nesciunt consequatur vero, eius tenetur.
        </section>
      </Layout>
    </>
  );
}
