const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.onCreateNode = async ({ node, loadNodeContent, actions }) => {
  if (node.internal.type === 'File') {
    const { createNodeField } = actions;
    const content = await loadNodeContent(node);
    createNodeField({
      node,
      name: 'internalContent',
      value: content,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
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

  // Create project pages.
  const projects = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  projects.forEach(({ node }) => {
    createPage({
      // The slug generated by gatsby-plugin-mdx doesn't contain a slash at the beginning
      // You can prepend it with any prefix you want
      path: `/projects/${node.slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/ProjectTemplate.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        carouselPhotosDir: node.frontmatter.carouselPhotosDir,
        techStackPath: node.frontmatter.techStackPath,
      },
    });
  });
};
