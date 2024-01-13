import React from "react";
// import web1 from "../src/images/profile.jpg"
import web1 from "../src/images/2.png";
import { NavLink } from "react-router-dom";
import "./index.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    return (
        <>
            <section data-aos="fade-up" className=" " style={{ backgroundColor: "#1f2235", color: "#000" }}>
                <div className="profile py-lg-3 container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-7  pt-lg-0 order-2  order-lg-1 d-flex justify-content-center flex-column ">
                                    <h3>Hey...! I AM </h3>
                                    <h1 className="display-3" style={{ color: "#242d52" }}>
                                        Mayur Gulhane
                                    </h1>
                                    <h3>
                                        I'm {" "}
                                        <span className="text-danger fw-bold">
                                            <Typewriter
                                                words={[
                                                    "BE in Computer Science ",
                                                    "Python Developer",
                                                    "Django Developer",
                                                    "ReactJs Developer",
                                                ]}
                                                loop="false"
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </span>
                                    </h3>
                                    <NavLink
                                        exact
                                        className="btn btn-danger rounded profile-button mb-lg-0 mb-3"
                                        to="/cv"
                                    >
                                        View CV
                                    </NavLink>
                                </div>
                                <div className="col-md-5 order-1 order-lg-2 d-flex justify-content-center flex-column pl-lg-5 my-lg-1  ">
                                    <img src={web1} alt="profile_pic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 105">
                    <path
                        fill="#ffa585"
                        fillOpacity="1"
                        d="M0,96L80,80C160,64,320,32,480,42.7C640,53,800,107,960,122.7C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                </svg>
            </section>
        </>
    );
};
export default Home;
