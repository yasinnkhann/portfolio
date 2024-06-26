import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import MDXContent from './MDXContent';
import type { ProjectQuery } from 'graphql-types';
import Layout from './Layout';
import Carousel from './Carousel';

interface Props {
	data: ProjectQuery;
}

export default function ProjectTemplate({ data }: Props) {
	const shortcodes = { Link };

	const innerContent = data.file?.fields?.internalContent;

	const carouselImgs = data.allFile.edges.map(
		({ node }) => node.childImageSharp?.gatsbyImageData
	);
	return (
		<>
			<Helmet>
				<title>Projects | {data.mdx?.frontmatter?.title}</title>
			</Helmet>
			<Layout>
				<section className='mt-[calc(var(--header-height-mobile)+1rem)] 2xl:mt-[calc(var(--header-height-2xl)+1rem)] font-[Manrope] 2xl:text-2xl'>
					<div className='flex justify-between'>
						<h1 className='m-4'>{data.mdx?.frontmatter?.title}</h1>
						<button
							onClick={() => navigate(`/projects`)}
							type='button'
							className='mr-7'
						>
							<p className='text-blue-500 underline underline-offset-1'>Back</p>
						</button>
					</div>

					<div className='m-4 text-xl'>
						<MDXContent components={shortcodes}>{data.mdx?.body}</MDXContent>
					</div>

					<Carousel images={carouselImgs} />
					<div className='text-center m-4'>
						<a
							href={data.mdx?.frontmatter?.link ?? ''}
							target='_blank'
							rel='noreferrer'
						>
							Deployed Link
						</a>
					</div>

					{innerContent && (
						<>
							<h2 className='m-4'>Tech Stack Used:</h2>
							<div className='flex flex-wrap ml-4 mb-6'>
								{JSON.parse(innerContent).techStacks.map(
									(techStackSrc: string, idx: number) => (
										// eslint-disable-next-line react/no-array-index-key
										<div className='p-1' key={idx}>
											<img src={techStackSrc} alt='' />
										</div>
									)
								)}
							</div>
						</>
					)}
				</section>
			</Layout>
		</>
	);
}

export const projectQuery = graphql`
	query Project(
		$id: String
		$carouselPhotosDir: String
		$techStackPath: String
	) {
		mdx(id: { eq: $id }) {
			id
			body
			fields {
				slug
			}
			frontmatter {
				title
				link
				repo
				carouselPhotosDir
				techStackPath
			}
		}
		allFile(
			filter: { relativeDirectory: { eq: $carouselPhotosDir } }
			sort: { name: ASC }
		) {
			edges {
				node {
					id
					name
					base
					relativePath
					childImageSharp {
						gatsbyImageData(
							placeholder: BLURRED
							layout: CONSTRAINED
							transformOptions: { cropFocus: CENTER, fit: COVER }
						)
					}
				}
			}
		}
		file(relativePath: { eq: $techStackPath }) {
			id
			name
			base
			fields {
				internalContent
			}
		}
	}
`;
