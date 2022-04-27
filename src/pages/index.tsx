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
        <section className="grid grid-cols-[45%_55%] grid-rows-[50vh_40vh] font-[Manrope] mt-[calc(var(--header-height-mobile)+1rem)] 2xl:mt-[calc(var(--header-height-2xl)+1rem)]">
          <div className="relative row-start-1 row-end-3">
            <h1 className="absolute top-[25%] left-[10%]">
              Hello, my name is{` `}
              <strong className="text-red-500 hover:animate-pulse">
                Yasin
              </strong>
              {` `}
              and I am a
              <br />
              <strong className="text-blue-500 hover:animate-pulse">
                software engineer.
              </strong>
            </h1>
          </div>
          <GatsbyImage
            className="mx-auto my-auto"
            image={data.file.childImageSharp.gatsbyImageData}
            alt=""
          />
        </section>
        {/* <section className="grid grid-cols-[45%_55%] grid-rows-[50vh_40vh] font-[Manrope] mt-[calc(var(--header-height-mobile)+1rem)] 2xl:mt-[calc(var(--header-height-2xl)+1rem)]">
          <div className="relative row-start-1 row-end-3">
            <h1 className="absolute top-[25%] left-[10%]">
              Hello, my name is{` `}
              <strong className="text-red-500 hover:animate-pulse">
                Yasin
              </strong>
              {` `}
              and I am a
              <br />
              <strong className="text-blue-500 hover:animate-pulse">
                software engineer.
              </strong>
            </h1>
          </div>
          <GatsbyImage
            className="min-w-[33rem] min-h-[21rem] max-h-[calc(100vh-var(--header-height-mobile)-4rem)] 2xl:max-h-[calc(100vh-var(--header-height-2xl)-4rem)]"
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
    file(relativePath: { eq: "home/splash.png" }) {
      id
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
