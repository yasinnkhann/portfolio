import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import confetti from 'canvas-confetti';
import axios from 'axios';
import { graphql, Link } from 'gatsby';
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

  // useEffect(() => {
  //   checkCookie();
  // }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <section className="grid grid-cols-[45%_55%] grid-rows-[40vh_50vh] sm:items-center font-[Manrope] mt-[calc(var(--header-height-mobile)+1rem)] 2xl:mt-[calc(var(--header-height-2xl)+1rem)]">
          <div className="row-start-1 row-end-2 col-start-1 col-end-3 mt-4 sm:row-start-1 sm:col-end-2">
            <h1 className="text-center leading-10">
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
            <div className="text-center mt-[5.5rem]">
              <h2>Check out some of my work.</h2>
              <Link to="/projects">
                <button
                  className="bg-black p-3 mt-4 rounded-2xl text-white text-lg hover:text-yellow-300"
                  type="button"
                >
                  My Projects
                </button>
              </Link>
            </div>
          </div>
          <GatsbyImage
            className="mx-auto my-auto row-start-2 row-end-3 col-start-1 col-end-3 sm:row-start-1 sm:row-end-2 sm:col-start-2"
            image={data.coverPhoto.childImageSharp.gatsbyImageData}
            alt={data.coverPhoto.name}
          />
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query HomeQuery {
    coverPhoto: file(relativePath: { eq: "home/splash.png" }) {
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
          transformOptions: { cropFocus: CENTER, fit: COVER }
        )
      }
    }
  }
`;
