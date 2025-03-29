import React from "react";
import "../../index.css";

export function Projects() {
    return (
        <div className="container p-5">
            <div className="row ">
            <div className="col-6 mb-5 p-5">
                <div class="card" style={{ width: "30rem" }}>
                    <img
                        class="card-img-top p-3"
                        src="/project.png"
                        alt="Card image cap"
                    />
                    <div class="card-body">
                        <h5 class="card-title">Wanderlust</h5>
                        <p class="card-text fs-6">
                            Wanderlust is a full-stack web application inspired by Airbnb,
                            designed for listing and booking accommodations. It features an
                            interactive map for location-based listings, secure user
                            authentication, and a well-structured MVC architecture for
                            scalability. The project integrates MongoDB for data management,
                            Cloudinary for image storage. Express Sessions and cookies
                            enhance user experience by maintaining login states and preferences..
                        </p>
                    </div>
                    <div class="card-body">
                        <a
                            href="https://wanderlust-project-jy86.onrender.com/listings"
                            class="btn btn-primary btn1 "
                        >
                            Demo
                        </a>
                        <a
                            href="https://github.com/Mishra7084/Wanderlust-project"
                            class="btn btn-primary btn2"
                        >
                            Source
                        </a>
                    </div>
                </div>
                </div>
                
                <div className="col-6 mb-5 p-5">
                <div class="card " style={{ width: "30rem" }}>
                    <img
                        class="card-img-top p-3"
                        src="/project.png"
                        alt="Card image cap"
                    />
                    <div class="card-body">
                        <h5 class="card-title mb-2">Zerodha Clone</h5>
                        <p class="card-text fs-6 mt-3">
                            Zerodha Clone is a stock trading platform replica with a
                            React-based UI for a dynamic and seamless user experience. It
                            includes real-time market data display, portfolio management, and
                            secure user authentication. The backend is built using Node.js,
                            Express.js, and MongoDB, ensuring efficient data handling and
                            performance.
                        </p>
                    </div>
                    <div class="card-body mb-3">
                        <a
                            href="https://github.com/Mishra7084"
                            class="btn btn-primary btn1 "
                        >
                            Demo
                        </a>
                        <a
                            href="https://github.com/Mishra7084"
                            class="btn btn-primary btn2"
                        >
                            Source
                        </a>
                    </div>
                </div>
                </div>
                </div>
            </div>
    );
}

export default Projects;
