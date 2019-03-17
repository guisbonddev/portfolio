import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/image"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
    }}
  >
    
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js"></script>

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
