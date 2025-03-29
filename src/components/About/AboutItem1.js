import React from 'react';

export function AboutItem1 (){
    return(
        <div className="container p-2"style={{marginRight:"50px"}}>
            <div className="row p-3">
                    <div className='col-1'>
                        <img src="./aboutImage/cursorIcon.png" alt="cursor"/>
                    </div>
                    <div className='col-11'>
                    <h1>Frontend Developer</h1>
                    <p className='mt-3 fs-5'>
                        I'm a front-end developer with experience
                        in building responsive and optimized sites
                    </p>
                </div>
            </div>
            </div>
    )
}

export default AboutItem1;