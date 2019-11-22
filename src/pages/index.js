import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import "../css/bulma.css"
import "../css/main.css"
import "../css/spotify.css"
import "../css/style.css"
import p3c from "../images/p3c.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faYoutube,faTwitter , faGithub } from '@fortawesome/free-brands-svg-icons'
const IndexPage = () => (
<Layout>

		<div class="container">
			<div class="columns">
  				<div class="column"></div>
  				<div class=" column is-three-quarters">
					<section class="wrap">
					<div style={{paddingLeft:"10px", paddingRight:"10px"}}>
						<div class="columns">
							<section class="content column is-8">
								<strong><h2 style={{color: "#c26e20"}}>Hello!  / 여보세요!</h2></strong>
								<div class="h4"><p>My name is Waleed  general known as Faqahat I am a passionate & self taught <strong>Full Stack Developer / System Admin / UI,UX Designer</strong> with a keen interest in the latest technologies. With experience working on multiple robust globally released products since 2010, I strive to create impact on others lives to be more creative, productive, and fun. 
								Along with my development work, I actively support inclusion and diversity in the technology industry through various community events and organizations.&nbsp;</p> <p>This is a place holder page.. I am working on a new portfolio/E-Resume till than you may connect with me via social links in footer</p></div>			
							</section>
							<section class="content column is-4">
								<center>
									<img alt="" ondragstart="return false" ondrag="return false" oncontextmenu="return false" src={p3c}  class="img-responsive" />
									<br />
								</center>
							</section>
						</div>
					
						<div class="columns">
							<section class="subscribe column is-full">
								<div class="form-wrap">				
									<input type="text" name="email" value="" id="email-field" placeholder="Hola at me  faqahat@gmx.com !" disabled />
								</div>
							</section>
							<div class="columns">
								<div class="column is-full">
									<center>
											<p id="spotifyHeader"></p>
											<span id="trackArtwork"></span>
											<span id="trackName"></span>
											<span id="artist"></span> 
									</center>
								</div>
							</div>	
						</div>	
						</div>	


						<section class="">
							<div class="footer">
								<div class="columns">
									<div class="column is-10">
									<a href="https://twitter.com/faqa_cat" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faTwitter}/></a>
									<a target="_blank" rel="noopener noreferrer" href="http://instagram.com/faqahat.js" ><FontAwesomeIcon icon={faInstagram}/></a>
									<a target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/channel/UC8U05ZIBDDZDIJMk4bsc16w?view_as=subscriber" ><FontAwesomeIcon icon={faYoutube}/></a>
									<a target="_blank" rel="noopener noreferrer"  href="https://github.com/faqahat"> <FontAwesomeIcon icon={faGithub}/></a>
									</div>
									<div class="column is-2" >  <font color="#555">Hosted at</font><a href="https://now.sh" rel="noopener noreferrer" target="_blank"><svg width="40" height="20" viewBox="0 0 40 20"><g stroke="none" stroke-width="1" fill="var(--geist-foreground)" fill-rule="evenodd"><polygon points="11.0541053 0 22.1082105 19.6826969 0 19.6826969"></polygon></g></svg></a></div>
								</div>
							</div>
						</section>
					


    				</section>
					
				</div>
				<div class="column"></div>
			</div>
		</div>
</Layout>
)

export default IndexPage
