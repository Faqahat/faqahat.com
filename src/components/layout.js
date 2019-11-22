import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <>
    <Helmet>
      <body className="style-2" />
      <title>Hi I'm Faqahat</title>
     </Helmet>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
