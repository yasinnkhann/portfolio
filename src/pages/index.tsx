import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import confetti from 'canvas-confetti';
import axios from 'axios';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Home({ data }) {
  const makeConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const checkCookie = async () => {
    const { data: cookieData } = await axios.get(
      `http://localhost:8001/cookie`,
      {
        withCredentials: true,
      },
    );
    if (cookieData === `no-cookie`) {
      makeConfetti();
      await axios.get(`http://localhost:8001/cookie`, {
        withCredentials: true,
        headers: {
          koockie: `true`,
        },
      });
    }
  };

  useEffect(() => {
    checkCookie();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <section className="font-[Manrope] mt-[calc(var(--header-height-mobile)+1rem)] 2xl:mt-[calc(var(--header-height-2xl)+1rem)]">
          <h1 className="text-center">WELCOME</h1>
          <GatsbyImage
            className="max-h-[calc(100vh-var(--header-height-mobile)-4rem)] 2xl:max-h-[calc(100vh-var(--header-height-2xl)-4rem)]"
            image={data.file.childImageSharp.gatsbyImageData}
            alt=""
          />
        </section>
        {/* <section className="font-[Manrope] mt-[calc(var(--header-height-mobile))] bg-[url('../assets/home/leader.png')] bg-no-repeat bg-[length:100%] h-[calc(100vh-var(--header-height-mobile))]">
          <h1 className="text-center">WELCOME</h1>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt=""
          />
        </section> */}
      </Layout>
    </>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "home/splash2.png" }) {
      id
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
