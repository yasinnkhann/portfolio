import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import SearchBar from '../components/SearchBar';
import { SkillsQuery } from 'graphql-types';
import Layout from '@components/Layout';

interface Props {
	data: SkillsQuery;
}

export default function Skills({ data: { skills } }: Props) {
	const [searchQuery, setSearchQuery] = useState<string>(``);

	const multipleWordsExceptions = {
		'react-testing-library': true,
		'styled-components': true,
		'material-ui': true,
		'ant-design': true,
		'react-router-dom': true,
		'tailwind-css': true,
	};

	const renderUpdatedSearch = () => {
		const filteredSkills = skills.edges
			.filter(edge =>
				edge.node.name
					.toLowerCase()
					.split(`-`)
					.join(` `)
					.includes(searchQuery.toLowerCase())
			)
			.map(edge => (
				<div
					key={edge.node.id}
					className='rounded-full bg-gray-200 m-11 p-[.5rem] md:p-[1.2rem] w-[var(--skill-photo-size-mobile)] h-[var(--skill-photo-size-mobile)] sm:w-[var(--skill-photo-size-sm)] sm:h-[var(--skill-photo-size-sm)] md:w-[var(--skill-photo-size-md)] md:h-[var(--skill-photo-size-md)] lg:w-[var(--skill-photo-size-lg)] lg:h-[var(--skill-photo-size-lg)] xl:w-[var(--skill-photo-size-xl)] xl:h-[var(--skill-photo-size-xl)] 2xl:w-[var(--skill-photo-size-2xl)] 2xl:h-[var(--skill-photo-size-2xl)]'
				>
					<img
						className='w-full hover:animate-spin-slow'
						src={edge.node.publicURL ?? ''}
						alt={
							!multipleWordsExceptions[
								edge.node.name as keyof typeof multipleWordsExceptions
							]
								? `${edge.node.name.split(`-`)[0]} icon`
								: `${edge.node.name.split(`-`).join(` `)} icon`
						}
					/>
					<p className='text-center underline my-4 md:my-8'>
						{!multipleWordsExceptions[
							edge.node.name as keyof typeof multipleWordsExceptions
						]
							? `${edge.node.name.split(`-`)[0]}`
							: `${edge.node.name.split(`-`).join(` `)}`}
					</p>
				</div>
			));
		return filteredSkills;
	};

	return (
		<>
			<Helmet>
				<title>Skills</title>
			</Helmet>
			<Layout>
				<section className='mt-[calc(var(--header-height-mobile)+1rem)] 2xl:mt-[calc(var(--header-height-mobile)+3rem)] font-[Manrope]'>
					<SearchBar updateSearch={query => setSearchQuery(query)} />

					<div className='grid grid-cols-[1fr_1fr] justify-items-center sm:grid-cols-[1fr_1fr_1fr] sm:justify-items-center sm:animate-runSM md:animate-runMD lg:grid-cols-[1fr_1fr_1fr_1fr] lg:animate-runLG xl:animate-runXL 2xl:animate-run2XL 2xl:mt-[calc(var(--header-height-2xl)-2rem)]'>
						{renderUpdatedSearch()}
					</div>
				</section>
			</Layout>
		</>
	);
}

export const query = graphql`
	query Skills {
		skills: allFile(
			filter: { relativeDirectory: { eq: "skills" } }
			sort: { name: ASC }
		) {
			edges {
				node {
					id
					name
					publicURL
				}
			}
		}
	}
`;
