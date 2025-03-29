import React from "react";
import { Link } from "react-router-dom";
export function Contact(){
    return(
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 style={{fontSize:"5rem"}}>Contact</h1>
                    <p style={{fontSize:"1.8rem"}}>Feel free to reach out!</p>
                </div>
                <div className="col-6 p-5">
                        <div className="mb-3">
                            <Link to="mailto:akankshamishra22745@gmail.com">
                            <img src="./ContactImage/emailIcon.png" alt="email" />
                            </Link>
                            <p style={{display:"inline",marginLeft:"1rem",fontSize:"25px"}}>akankshamishra@gmail.com</p>
                        </div>
                        
                        <div className="mb-3">
                            <Link to="https://www.linkedin.com/in/akanksha7992">
                            <img src="./ContactImage/linkedinIcon.png" alt="linkedin" />
                            </Link>
                            <p style={{display:"inline",marginLeft:"1rem",fontSize:"25px"}}>linkedin.com/akanksha</p>
                        </div>

                        <div className="mb-3">
                            <Link to="https://github.com/Mishra7084">
                            <img src="./ContactImage/githubIcon.png" alt="github" />
                            </Link>
                            <p style={{display:"inline",marginLeft:"1rem",fontSize:"25px"}}>github.com/Mishra7084</p>
                        </div>
            </div>
        </div>
        </div>
    );
}
export default Contact;