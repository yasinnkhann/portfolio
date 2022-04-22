import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import confetti from 'canvas-confetti';
import axios from 'axios';

export default function Home() {
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
    const { data } = await axios.get(`http://localhost:8001/cookie`, {
      withCredentials: true,
    });
    if (data === `no-cookie`) {
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
        <section className="font-[Manrope] mt-[calc(var(--header-height)+1rem)]">
          <div>
            <h1 className="text-center">WELCOME</h1>
          </div>
        </section>
      </Layout>
    </>
  );
}
