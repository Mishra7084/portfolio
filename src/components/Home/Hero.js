import React from "react";


export  function Hero(){
    return(
        <div className="Container">
            <div className="row ">
                <div className="col-6 p-5 mt-5"style={{lineHeight: "1.8", fontSize: "1.2rem"}}>
                    <h1 >Hi, I'm Akanksha Mishra</h1>
                    <p className="mt-3 ">
                    I'm a passionate full-stack developer with a strong foundation
                    in both front-end and back-end technologies.
                    I have experience working with HTML, CSS, JavaScript, React.js, Node.js,
                    Express.js, and MongoDB.
                    I've built projects like an Airbnb copy with a map feature,
                    a portfolio website, and a Zerodha clone, showcasing my skills in authentication,
                    database management, and cloud integration.
                    I'm eager to learn, solve problems, and build efficient, user-friendly
                    web applications.Reach out if you'd like to learn more!
                    </p>
                    <a href="mailto:akankshamishra22745@gmail.com" class="btn btn-primary">Contact Me</a>
                </div>
                <div className="col-6 p-5">
                    <img src="/MyImage3.jpg" alt="hero"style={{ width: "400px", height:"400px", borderRadius: "100%" }}/>
                </div>
            </div>
        </div>
    )
}

export default Hero;