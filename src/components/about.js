import React from "react"
import "../css/bulma.css"
import "../css/main.css"
import "../css/style.css"
import p3c from "../images/p3c.png"

const Email = () => {
	return(

<div className="columns">
							<section className="content column is-8">
								<strong><h2 style={{color: "#c26e20"}}>Hello!  / 여보세요!</h2></strong>
								<div className="h4"><p>My name is Waleed  general known as Faqahat I am a passionate & self taught <strong>Full Stack Developer / System Admin / UI,UX Designer</strong> with a keen interest in the latest technologies. With experience working on multiple robust globally released products since 2010, I strive to create impact on others lives to be more creative, productive, and fun. 
								Along with my development work, I actively support inclusion and diversity in the technology industry through various community events and organizations.&nbsp;</p> <p>This is a place holder page.. I am working on a new portfolio/E-Resume till than you may connect with me via social links in footer</p></div>			
							</section>
							<section className="content column is-4">
								<center>
									<img alt=""  src={p3c}  className="img-responsive" />
									<br />
								</center>
							</section>
						</div>
					
)
	}

export default Email
