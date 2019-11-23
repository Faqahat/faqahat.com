import React from "react"
import "../css/bulma.css"
import "../css/main.css"
import "../css/style.css"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faYoutube,faTwitter , faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
	return(

						<section className="">
							<div className="footer">
								<div className="columns">
									<div className="column is-10">
									<a href="https://twitter.com/faqa_cat" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faTwitter}/></a>
									<a target="_blank" rel="noopener noreferrer" href="http://instagram.com/faqahat.js" ><FontAwesomeIcon icon={faInstagram}/></a>
									<a target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/channel/UC8U05ZIBDDZDIJMk4bsc16w?view_as=subscriber" ><FontAwesomeIcon icon={faYoutube}/></a>
									<a target="_blank" rel="noopener noreferrer"  href="https://github.com/faqahat"> <FontAwesomeIcon icon={faGithub}/></a>
									</div>
									<div className="column is-2" >  <font color="#555">Hosted at</font><a href="https://now.sh" rel="noopener noreferrer" target="_blank"><svg width="40" height="20" viewBox="0 0 40 20"><g stroke="none" strokeWidth="1" fill="var(--geist-foreground)" fillRule="evenodd"><polygon points="11.0541053 0 22.1082105 19.6826969 0 19.6826969"></polygon></g></svg></a></div>
								</div>
							</div>
						</section>
					
)
	}

export default Footer
