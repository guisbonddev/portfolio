import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/image"

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
    }}
  >
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

    <script src="https://unpkg.com/react/umd/react.production.js" crossorigin />

    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.js"
      crossorigin
    />

    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin
    />

  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
    crossorigin="anonymous"
  />

    <script>var Alert = ReactBootstrap.Alert;</script>

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 400,
      }}
    >

      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `black`
          }}
        > 
        </Link>
      </h3>
    </div>

    <Nav style={{ paddingTop: `20px`}} className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link style={{ textDecoration: `none`, color: `black`}} href="/home">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ textDecoration: `none`, color: `black`}} href="/home">Moments</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ textDecoration: `none`, color: `black`}} href="/home">Work</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ textDecoration: `none`, color: `black`}} href="/home">Experience</Nav.Link>
      </Nav.Item>
    </Nav>
    
    <TypographyStyle typography={typography} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
