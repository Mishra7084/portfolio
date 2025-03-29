import React from "react";

export function Skills(){
    return(
        <div className="container p-5">
            <div className="row">
                <h1>Skills</h1>
            </div>
            <div className="row p-2">
                <div className="col-6">
                    <div className="row p-2">
                    <div className="col-2 p-3" style={{marginRight:"5rem"}}>
                        <div className="skills">
                            <img
                            src="./SkillsImage/html.png"
                            alt="html-logo"
                            style={{width:"60px",marginTop:"20px",marginLeft:"20px"}}
                            />
                        </div>
                        <h4 style={{marginLeft:"18px",marginTop:"10px"}}>HTML</h4> 
                    </div>

                    <div className="col-2 p-3" style={{marginRight:"5rem"}}>
                        <div className="skills">
                            <img
                            src="./SkillsImage/css.png"
                            alt="css-logo"
                            style={{width:"60px",marginTop:"20px",marginLeft:"20px"}}
                            />
                        </div>
                        <h4 style={{marginLeft:"25px",marginTop:"10px"}}>CSS</h4> 
                    </div>

                    <div className="col-2 p-3" style={{marginRight:"5rem"}}>
                        <div className="skills">
                            <img
                            src="./SkillsImage/Javascript.png"
                            alt="JS-logo"
                            style={{width:"60px",marginTop:"20px",marginLeft:"20px"}}
                            />
                        </div>
                        <h4 style={{marginTop:"10px"}}>JavaScript</h4> 
                    </div>

                    <div className="col-2 p-3" style={{marginRight:"5rem"}}>
                        <div className="skills">
                            <img
                            src="./SkillsImage/react.png"
                            alt="react-logo"
                            style={{width:"60px",marginTop:"20px",marginLeft:"20px"}}
                            />
                        </div>
                        <h4 style={{marginLeft:"15px",marginTop:"10px"}}>React</h4> 
                    </div>

                    <div className="col-2 p-3" style={{marginRight:"5rem"}}>
                        <div className="skills">
                            <img
                            src="./SkillsImage/node.png"
                            alt="node-logo"
                            style={{width:"60px",marginTop:"20px",marginLeft:"20px"}}
                            />
                        </div>
                        <h4 style={{marginLeft:"18px",marginTop:"10px"}}>Node</h4> 
                    </div>
                    
                    <div className="col-2 p-3" style={{marginRight:"5rem"}}>
                        <div className="skills">
                            <img
                            src="./SkillsImage/express-js.png"
                            alt="express-logo"
                            style={{width:"60px",marginTop:"20px",marginLeft:"20px"}}
                            />
                        </div>
                        <h4 style={{marginLeft:"15px",marginTop:"10px"}}>Express</h4> 
                    </div>
                    
                    <div className="col-2 p-3" style={{marginRight:"5rem"}}>
                        <div className="skills">
                            <img
                            src="./SkillsImage/mongodb.png"
                            alt="mongodb-logo"
                            style={{width:"60px",marginTop:"20px",marginLeft:"20px"}}
                            />
                        </div>
                        <h4 style={{marginTop:"10px"}}>MongoDB</h4> 
                    </div>
                    
                    <div className="col-2 p-3" style={{marginRight:"5rem"}}>
                        <div className="skills">
                            <img
                            src="./SkillsImage/bootstrap.png"
                            alt="bootstrap-logo"
                            style={{width:"60px",marginTop:"20px",marginLeft:"20px"}}
                            />
                        </div>
                        <h4 style={{marginTop:"10px"}}>Bootstrap</h4> 
                    </div>
                    
                </div>
            </div>
                <div className="col-1"></div>
                <div className="col-5 p-3">
                    <div>
                        <h2>Frontend Development</h2>
                        <ul style={{ lineHeight: '1.8', fontSize: '1.2rem', fontWeight:"300" }}>
                            <li>HTML, CSS, JavaScript</li>
                            <li>React.js, Bootstrap, Tailwind CSS</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Backend Development</h2>
                        <ul style={{ lineHeight: '1.8', fontSize: '1.2rem', fontWeight:"300" }}>
                            <li>Node.js, Express.js</li>
                            <li>REST APIs</li>
                        </ul>
                    </div>

                    <div>
                        <h2 >Authentication & Security</h2>
                        <ul style={{ lineHeight: '1.8', fontSize: '1.2rem', fontWeight:"300" }}>
                            <li>Passport.js, Hashing</li>
                            <li>Cookies & Sessions</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Cloud & Deployment</h2>
                        <ul style={{ lineHeight: '1.8', fontSize: '1.2rem', fontWeight:"300" }}>
                            <li>Cloudinary, AWS</li>
                            <li>MongoDB Atlas</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Version Control & Tools</h2>
                        <ul style={{ lineHeight: '1.8', fontSize: '1.2rem', fontWeight:"300" }}>
                            <li>Git, GitHub</li>
                            <li>VS Code, Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;