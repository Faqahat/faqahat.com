import React from "react"
import "../css/bulma.css"
import "../css/main.css"
import "../css/style.css"


const Email = (props) => {
    let placeHolder = "Hola at me  " +props.email+"!"
	return(

        <section className="subscribe column is-full">
        <div className="form-wrap">				
            <input type="text" name="email" value="" id="email-field" placeholder={placeHolder} disabled />
        </div>
        </section>
					
)
	}

export default Email
