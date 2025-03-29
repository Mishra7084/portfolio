import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
    return (
        <div className= "container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5 fs-2">404 Not Found</h1>
                <p className="mt-3 text-muted fs-5">Sorry, the page you looking for does not exist. Visit</p>
                <Link  to ="/">Portfolio</Link>
            </div>
        </div>
    );
}

export default NotFound;