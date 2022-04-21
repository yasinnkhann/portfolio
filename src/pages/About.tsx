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
        {/* <section className="mt-[calc(var(--header-height)+1rem)] font-[Manrope] grid grid-rows-[50%_50%] grid-cols-2"> */}
        <section className="mt-[calc(var(--header-height)+1rem)] font-[Manrope] grid grid-rows-[20%_20%_20%_20%_20%] grid-cols-2">
          <div className="mx-2">
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
            Reactor. During my time there, I ate, slept, and breathed
            coding.I&apos;ve been a software engineer for over a decade now, and
            I&apos;ve been working on a wide variety of projects, from small
            side projects to large scale enterprise applications. I&apos;m a
            huge fan of the web and I love to code.
          </div>
          {/* <div className="mr-1 w-[100%] border-2 border-green-700"> */}
          <StaticImage
            className="object-cover h-[30vh] w-[98%] border-2 border-red-700 sm:h-[40vh] md:h-[60vh]"
            src="../assets/photo-in-favela.JPG"
            alt="me in rio"
          />
          {/* </div> */}
        </section>
      </Layout>
    </>
  );
}
