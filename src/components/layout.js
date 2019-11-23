import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <>
    <Helmet>  
      <body className="style-2" style={{backgroundColor:"#1d2226"}} />
      <title>Hi I'm Faqahat</title>
    </Helmet>
    <div className="container">
			<div className="columns">
  				<div className="column"></div>
  				<div className=" column is-three-quarters">
            <main>{children}</main>
          </div>
			    <div className="column"></div>
		  </div>
		</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
