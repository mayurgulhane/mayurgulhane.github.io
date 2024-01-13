import React from 'react';
import web from "../src/images/img.jpg";
import { Call, Email, Home, Twitter, LinkedIn, GitHub,GetApp  } from '@material-ui/icons';
import downloadPDF from './pdfUtils';

const Cv = () => {
    

    return (
        <>

             <div className="container mb-4" >
             <span>
                <div className="d-flex justify-content-center ">
                    <h1 className=" my-3 bg-danger d-inline-flex px-5 bd-highlight rounded-pill "> Resume </h1>
                    
                </div>
                <div className="d-flex justify-content-end mt-3 ml-3">
                <button
                    className="btn btn-danger"
                    onClick={downloadPDF}
                >
                    Resume <GetApp  />
                </button>
            </div>
            </span>
                <div data-aos="zoom-in" className="row  d-flex align-content-center justify-content-center" id="cv-container">
                    <div className="col-lg-3  bg-info text-white text-center py-4 card">
                        <div className="header-left">
                            <img src={web} alt="Profile_image" className="img-thumbnail  mb-2" />
                            <h2 className="" >Mayur K. Gulhane</h2>
                            <p className="text-light">B.E in Computer Science</p>
                        </div>
                        <div className="mx-3">
                            <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">Contact</h5>
                            <ul className="list-unstyled text-white text-start  py-2 ">
                                <li className="list-item  py-1 ">
                                    <Call fontSize="large" className="text-success bg-white rounded-circle p-1 " />  (+91) 7775886398
                                </li>
                                <li className="list-item py-1">
                                    <Email fontSize="large" className="text-danger bg-white rounded-circle p-1 " /> gulhanemayur4212@gmail.com
                                </li>

                                <li className="list-item py-1">
                                    <Home fontSize="large" className="text-dark bg-white rounded-circle p-1 " /> Yavatmal, Maharastra.
                                </li>
                            </ul>
                        </div>
                        <div className="mx-3">
                            <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">Skill's</h5>
                            <ul className="list  mx-auto py-2  text-capitalize row">
                                <li className="col-lg-12 col-6 col-xl-6  list-item">C</li>
                                <li className=" col-lg-12 col-6 col-xl-6 list-item">HTML</li>
                                <li className=" col-lg-12 col-6 col-xl-6 list-item">CSS</li>
                                <li className="col-lg-12 col-6 col-xl-6 list-item">ReactJs</li>
                                <li className="col-lg-12 col-6 col-xl-6 list-item">Python</li>
                                <li className="col-lg-12 col-6 col-xl-6 list-item">Django</li>
                                <li className="col-lg-12 col-6 col-xl-6 list-item">Rest API</li>
                                <li className="col-lg-12 col-6 col-xl-6 list-item">Bootstrap</li>
                            </ul>
                        </div>
                        <div className="mx-3">
                            <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">Hobby</h5>
                            <ul className="list  py-2 text-capitalize">
                                <li className="list-item">Listening Music</li>
                                <li className="list-item">Collecting Old Coins</li>
                            </ul>
                        </div>
                        <div className="mx-3">
                            <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">Social</h5>
                            <ul className="list-unstyled py-2 text-start">
                                <li className="list-item py-1">
                                    <a href="https://twitter.com/MayurGulhane7" target="_blank" rel="noopener noreferrer" className=" text-decoration-none">
                                        <Twitter fontSize="large" className="bg-white rounded-circle p-1" /> MayurGulhane7
                                    </a>
                                </li>
                                <li className="list-item py-1 text-wrap">
                                    <a href="https://www.linkedin.com/in/mayurgulhane/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                        <LinkedIn fontSize="large" className="bg-white rounded-circle p-1" /> mayurgulhane
                                    </a>
                                </li>
                                <li className="list-item py-1 text-wrap">
                                    <a href="https://github.com/mayurgulhane" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                                        <GitHub fontSize="large" className="bg-white rounded-circle p-1" /> mayurgulhane
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-5 text-dark py-4 card ">
                        <div className="header-right">
                            <h4 className="text-uppercase text-primary ">Profile</h4>
                            <p>Aim to work in a challenging environment where my knowledge, ability and dedication will be utilized for
                                resolving problems and for the growth of organization.
                            </p>
                        </div>
                        <hr className="border border-info" />
                        <div>
                            <h4 className="text-uppercase text-primary">Education</h4>
                            <ul className="list">
                                <li className="list-item">
                                    <h5>2016 - 2020</h5>
                                    Bachelor of Engineering in Computer Science<br />Shant Gadge Baba University Amravati, Maharastra
                                    <p>
                                        H.V.P.mandal's college of engineering & technology amravati
                                    </p>
                                </li>
                                <li className="list-item">
                                    <h5>2014 - 2016</h5>
                                    HSC (Higher Secondary Certificate)
                                    <p>
                                        Shivajirao Moghe Arts,Commerce and Science Pandharakawada, Maharastra
                                    </p>
                                </li>
                                <li className="list-item">
                                    <h5>2013 - Present</h5>
                                    SSC (Secondary School Certificate)
                                    <p>
                                        Z.P.High School Pandharakawada, Maharastra
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <hr className="border border-info" />
                        <div>
                            <h4 className="text-uppercase text-primary">Achievements</h4>
                            <ul className="list">

                                <li className="list-item">
                                    <p>
                                        Secured 1st rank in<strong> General Knowledge Competition 2012-2013 </strong>conducted by <strong>Eklavya
                                            Gyanwardhini Organization.</strong>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <hr className="border border-info" />
                        <div>
                            <h4 className="text-uppercase text-primary">Projects</h4>
                            <ul className="list">
                                <li className="list-item">
                                    <h5>Ecommerce Website</h5>
                                    <p>
                                        I developed a fully functional e-commerce website
                                        using Django, a Python-based web framework. The
                                        site allows users to browse products, add items to
                                        their cart, and complete secure transactions. It also
                                        includes features like user authentication, product
                                        search, and order tracking for a seamless shopping
                                        experience.

                                    </p>
                                </li>
                                <li className="list-item">
                                    <h5>ToDo App (ReactJs & Django)</h5>
                                    <p>
                                        Developed a Todo App using Bootstrap, React.js and
                                        Django, enabling users to create, manage, and
                                        organize tasks seamlessly. Implemented features
                                        such as task creation, editing
                                    </p>
                                </li>
                                <li className="list-item">
                                    <h5>Library Management System</h5>
                                    <p>
                                        A Library management system using a Django and
                                        REST API for adding, updating, and deleting authors,
                                        categories and books

                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default Cv;
