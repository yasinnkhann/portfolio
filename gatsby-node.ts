import type { GatsbyNode } from 'gatsby';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { createFilePath } from 'gatsby-source-filesystem';
import type { ProjectsQuery } from './graphql-types';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] =
	async ({ stage, loaders, actions }) => {
		if (stage === 'build-html' || stage === 'develop-html') {
			actions.setWebpackConfig({
				module: {
					rules: [
						{
							test: /bad-module/,
							use: loaders.null(),
						},
					],
				},
			});
		}

		actions.setWebpackConfig({
			resolve: {
				plugins: [new TsconfigPathsPlugin()],
			},
		});
	};

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
	node,
	loadNodeContent,
	actions,
	getNode,
}) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'Mdx') {
		createNodeField({
			node,
			name: 'slug',
			value: createFilePath({ node, getNode }),
		});
	}

	if (node.internal.type === 'File') {
		const content = await loadNodeContent(node);
		createNodeField({
			node,
			name: 'internalContent',
			value: content,
		});
	}
};

export const createPages: GatsbyNode['createPages'] = async ({
	graphql,
	actions,
	reporter,
}) => {
	const { createPage } = actions;

	const result = await graphql(`
		query Projects {
			allMdx {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							carouselPhotosDir
							techStackPath
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
	}

	const projects = (result.data as ProjectsQuery).allMdx.edges;

	// you'll call `createPage` for each result
	projects.forEach(({ node }) => {
		createPage({
			path: `/projects${node.fields?.slug}`,
			// This component will wrap our MDX content
			component: path.resolve(`./src/components/ProjectTemplate.tsx`),
			// You can use the values in this context in
			// our page layout component
			context: {
				id: node.id,
				carouselPhotosDir: node.frontmatter?.carouselPhotosDir,
				techStackPath: node.frontmatter?.techStackPath,
			},
		});
	});
};
