import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height)+1rem)] font-[Manrope]">
          <StaticImage
            src="../assets/photo-in-favela.JPG"
            alt="me in rio"
            className="!float-right w-[50%] h-[50%] m-2"
          />
          <div className="ml-2">
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
            it gets taxing? Far from it.
          </div>
        </section>
      </Layout>
    </>
  );
}
