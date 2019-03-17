import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo" 
import "./main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Will Guisbond" keywords={[`developer`, `portfolio`, `pilot`,`syracuse`]} />
    <center>
      <h1 class="big">Hi, I'm Will</h1>
      <p class="subtitle">I'm a full stack developer based out of Syracuse, NY</p>
    </center>
    
  </Layout>
)


export default IndexPage
