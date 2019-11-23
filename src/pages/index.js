import React from "react"


import Layout from "../components/layout"
import "../css/bulma.css"
import "../css/main.css"

import "../css/style.css"
import Footer from "../components/footer"
import Spotify from "../components/spotify"
import About from "../components/about"

import Email from "../components/email"


const IndexPage = () => {
	return(
<Layout>
		<section className="wrap">
			<div style={{paddingLeft:"10px", paddingRight:"10px"}}>
				<About />
				<Email email="faqahat@gmx.com"/>
				<Spotify />		
			</div>
			
		</section>
		<Footer />
</Layout>
)
	}

export default IndexPage
