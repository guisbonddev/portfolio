import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Will Guisbond" keywords={[`developer`, `portfolio`, `pilot`,`syracuse`]} />
    <nav>test</nav>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)


export default IndexPage
