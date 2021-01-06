/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        frontmatter {
          slug
        }
      }
    }
  `)

  if (data.errors) {
    reporter.panic("failed on post creation", data.errors)
  }

  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    actions.createPages({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/BlogPost.js"),
      context: slug.frontmatter.slug,
    })
  })
}
