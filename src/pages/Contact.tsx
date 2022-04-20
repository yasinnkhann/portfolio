import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(2.5rem+1rem)] flex flex-col items-center">
          <div className="flex justify-between my-12 items-center">
            <h4>
              Github:{` `}
              <a
                href="https://github.com/yasinnkhann"
                target="_blank"
                rel="noreferrer"
              >
                github.com/yasinnkhann
              </a>
            </h4>
            <div className="ml-4">
              <Link to="https://github.com/yasinnkhann" target="_blank">
                <StaticImage
                  className="h-[3.125rem] w-[3.125rem] hover:scale-125"
                  src="../assets/github-svgrepo-com.svg"
                  alt="github icon"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between my-12 items-center">
            <h4>
              LinkedIn:{` `}
              <a
                href="https://www.linkedin.com/in/yasinnkhann/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.co/yasinnkhann
              </a>
            </h4>
            <div className="ml-4">
              <Link
                to="https://www.linkedin.com/in/yasinnkhann/"
                target="_blank"
              >
                <StaticImage
                  className="h-[3.125rem] w-[3.125rem] hover:scale-125"
                  src="../assets/linkedin-svgrepo-com.svg"
                  alt="linkedin icon"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between my-12 items-center">
            <h4>
              Email:{` `}
              <a
                href="mailto:yasinkhan500@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                yasinkhan500@gmail.com
              </a>
            </h4>
            <div className="ml-4">
              <Link to="mailto:yasinkhan500@gmail.com" target="_blank">
                <StaticImage
                  className="h-[3.125rem] w-[3.125rem] hover:scale-125"
                  src="../assets/email-svgrepo-com.svg"
                  alt="email icon"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between my-12 items-center">
            <h4>
              Instagram:{` `}
              <a
                href="https://www.instagram.com/yasinnkhann/"
                target="_blank"
                rel="noreferrer"
              >
                yasinnkhann
              </a>
            </h4>
            <div className="ml-4">
              <Link to="https://www.instagram.com/yasinnkhann/" target="_blank">
                <StaticImage
                  className="h-[3.125rem] w-[3.125rem] hover:scale-125"
                  src="../assets/instagram-2-1-logo-svgrepo-com.svg"
                  alt="instagram icon"
                />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
