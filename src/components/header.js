import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
    }}
  >
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
        <Logo />
        </Link>
      </h3>
    </div>
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

    <script>var Alert = ReactBootstrap.Alert;</script>
    
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
      crossorigin="anonymous"
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
