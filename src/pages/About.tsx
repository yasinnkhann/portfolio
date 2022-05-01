import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height-mobile)+1rem)] mb-1 font-[Manrope] 2xl:mt-[calc(var(--header-height-2xl)+1rem)]">
          <StaticImage
            src="../assets/about/photo-in-rio.jpg"
            alt="me in rio"
            className="!float-right w-[50%] h-[50%] mx-2"
          />
          <div className="mx-4 text-base sm:text-lg lg:text-xl 2xl:text-2xl">
            So you wanna know a little more about me huh? Well, allow me to
            introduce myself. My name is Yasin Khan and I&apos;m a software
            engineer based in the San Diego County. After graduating from the
            University of California, Santa Barbara in a degree of mathematics,
            I decided to test my luck in software development. I&apos;ve always
            been drawn to coding because the thought of having an idea come to
            life that could benefit the world at the same time just seemed so
            appealing to me. So I started out how most people did, took a couple
            of udemy courses, enrolled in the Harvard CS50 class, and just
            learned through trial and error. After some time learning the core
            fundamentals, I enrolled in a coding boot-camp known as Hack
            Reactor. During my time there, I ate, slept, and breathed coding. By
            the end of my time there, I became a fully fledged, full-stack
            software engineer. However, the journey of a software engineer is
            never ending. There&apos;s always new tech stacks and languages to
            learn and ones that are constantly updating, leaving the previous
            versions deprecated. For that reason, I&apos;m constantly learning
            to this day and looking for new ways to improve myself. Do I think
            it gets taxing? Far from it. I love seeing the evolution of
            technology and using it to aid me in making my thoughts become a
            reality.
          </div>
          {/* <AwesomeSlider>
            <div data-src="../assets/about/photo-in-rio.jpg" />
            <div data-src="../assets/about/photo-in-rio.jpg" />
            <div data-src="../assets/about/photo-in-rio.jpg" />
          </AwesomeSlider> */}
        </section>
      </Layout>
    </>
  );
}
