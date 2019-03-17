import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo" 
import "./main.css"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const IndexPage = () => (
  <Layout>
    <SEO title="Will Guisbond" keywords={[`developer`, `portfolio`, `pilot`,`syracuse`]} />
    <center>
      <h1 class="big">Hi, I'm Will</h1>
      <p class="subtitle">I'm a full stack developer based out of Syracuse, NY</p><br></br>
    </center>

  <Container>
    <Row>
      <Col><center><h1 class="big">About</h1></center></Col>
      <Col><center><h1 class="big">Moments</h1></center></Col>
    </Row>
  </Container>
  <Container>
    <Row>
      <Col><center><h1 class="big">Work</h1></center></Col>
      <Col><center><h1 class="big">Exp.</h1></center></Col>
    </Row>
  </Container>
    
    
  </Layout>
)


export default IndexPage
