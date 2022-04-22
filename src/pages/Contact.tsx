import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Layout>
        <section className="mt-[calc(var(--header-height)+1rem)] flex flex-col items-center font-[Manrope]">
          <div className="flex justify-between my-8 items-center border-[3px] border-orange-400 bg-gray-300 p-3 w-[80%] rounded-lg shadow-lg hover:border-orange-600">
            <h4>
              Github:
              <br />
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
                  className="h-[3.125rem] w-[3.125rem] hover:animate-[wiggle_1s_ease-in-out_infinite]"
                  src="../assets/github-svgrepo-com.svg"
                  alt="github icon"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between my-8 items-center border-[3px] border-green-400 bg-blue-200 p-3 w-[80%] rounded-lg shadow-lg hover:border-green-600">
            <h4>
              LinkedIn:
              <br />
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
                  className="h-[3.125rem] w-[3.125rem] hover:animate-[wiggle_1s_ease-in-out_infinite]"
                  src="../assets/linkedin-svgrepo-com.svg"
                  alt="linkedin icon"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between my-8 items-center border-[3px] border-purple-400 bg-red-200 p-3 w-[80%] rounded-lg shadow-lg hover:border-purple-600">
            <h4>
              Email:
              <br />
              <a
                href="mailto:yasinkhan500@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                yasinkhan500@gmail.com
              </a>
            </h4>
            <div className="ml-1">
              <Link to="mailto:yasinkhan500@gmail.com" target="_blank">
                <StaticImage
                  className="h-[3.125rem] w-[3.125rem] hover:animate-[wiggle_1s_ease-in-out_infinite]"
                  src="../assets/email-svgrepo-com.svg"
                  alt="email icon"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between my-8 items-center border-[3px] border-pink-400 bg-blue-300 p-3 w-[80%] rounded-lg shadow-lg hover:border-pink-600">
            <h4>
              Discord:
              <br />
              <a
                href="https://discordapp.com/users/yasinnkhann/"
                target="_blank"
                rel="noreferrer"
              >
                yasinnkhann
              </a>
            </h4>
            <div className="ml-4">
              <Link
                to="https://discordapp.com/users/yasinnkhann/"
                target="_blank"
              >
                <StaticImage
                  className="h-[3.125rem] w-[3.125rem] hover:animate-[wiggle_.5s_ease-in-out_infinite]"
                  src="../assets/discord-v2-svgrepo-com.svg"
                  alt="discord icon"
                />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
