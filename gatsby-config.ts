import type { GatsbyConfig } from 'gatsby';
import adapter from 'gatsby-adapter-netlify';

const config: GatsbyConfig = {
	adapter: adapter({
		excludeDatastoreFromEngineFunction: false,
		imageCDN: false,
	}),
	siteMetadata: {
		title: `Yasin's Portfolio`,
		siteUrl: 'https://yasinkhan.netlify.app/',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-postcss`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-image`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-mdx`,
		`gatsby-plugin-gatsby-cloud`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Yasin's Portfolio`,
				short_name: `Portfolio`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/assets/meta/logo.png`, // This path is relative to the root of the site.
				cache_busting_mode: 'none',
				crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
			},
		},
		{
			resolve: 'gatsby-plugin-offline',
			options: {
				workboxConfig: {
					globPatterns: ['**/*'],
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					'Manrope',
					`Open Sans`,
					`sans-serif`, // you can also specify font weights and styles
				],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/content/projects`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.md`, `.mdx`],
			},
		},
		{
			resolve: `gatsby-plugin-graphql-codegen`,
			options: {
				fileName: `./graphql-types.ts`,
				documentPaths: [
					'./src/**/*.{ts,tsx}',
					'./node_modules/gatsby-*/**/*.js',
					'./gatsby-node.ts',
				],
			},
		},
	],
};

export default config;
