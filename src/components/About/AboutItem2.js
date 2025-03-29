import React from 'react';

export function AboutItem2(){
    return (
        <div className='container p-2'style={{marginRight:"50px"}}>
            <div className="row p-3">
                <div className='col-1'>
                    <img src="./aboutImage/serverIcon.png" alt="server"/>
                </div>
                <div className='col-11'>
                    <h1>Backend Developer</h1>
                    <p className='mt-3 fs-5'>
                        I have experience developing fast and optimized
                        back-end systems and APIs
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutItem2;