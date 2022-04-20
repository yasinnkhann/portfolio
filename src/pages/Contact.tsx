import React from 'react';
// import Img from 'gatsby-image';
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
        <section className="mt-[calc(2.5rem+1rem)] flex flex-col">
          <div className="flex justify-between mb-14">
            <h4 className="ml-4">Github: github.com/yasinnkhann</h4>
            <div className="mr-4">
              <StaticImage
                className="h-[3.125rem] w-[3.125rem]"
                src="../assets/github-svgrepo-com.svg"
                alt="github icon"
              />
            </div>
          </div>

          <div className="flex justify-between mb-14">
            <h4 className="ml-4">LinkedIn: linkedin.co/yasinnkhann</h4>
            <div className="mr-4">
              <StaticImage
                className="h-[3.125rem] w-[3.125rem]"
                src="../assets/linkedin-svgrepo-com.svg"
                alt="linkedin icon"
              />
            </div>
          </div>

          <div className="flex justify-between mb-14">
            <h4 className="ml-4">Email: yasinkhan500@gmail.com</h4>
            <div className="mr-4">
              <StaticImage
                className="h-[3.125rem] w-[3.125rem]"
                src="../assets/email-svgrepo-com.svg"
                alt="email icon"
              />
            </div>
          </div>

          <div className="flex justify-between mb-14">
            <h4 className="ml-4">Instagram: yasinnkhann</h4>
            <div className="mr-4">
              <StaticImage
                className="h-[3.125rem] w-[3.125rem]"
                src="../assets/instagram-2-1-logo-svgrepo-com.svg"
                alt="instagram icon"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
