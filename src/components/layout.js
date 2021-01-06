import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Header from "./header"
import "./layout.css"
import { theme } from "../utils/theme"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const ChildContainer = styled.div`
  flex-grow: 1;
  margin-top: 97px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageContainer
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

          <ChildContainer>{children}</ChildContainer>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built By
            {` `}
            <a href="https://jassemdev.herokuapp.com/">Jassem Gaaloul</a>
          </footer>
        </PageContainer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
