import React from "react";
import web from "../src/images/aaaa.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="d-flex justify-content-center ">
        <h1 className=" my-3 bg-danger d-inline-flex px-5 bd-highlight rounded-pill ">
          About Us
        </h1>
      </div>

      <div
        data-aos="zoom-in"
        className=" d-flex justify-content-center "
      >
        <div className="col-lg-7 col-11 shadow mb-4 rounded">
          <div className="row  g-0 align-items-center">
            <div className="col-auto mx-auto px-4 py-3 ">
              <img className="img-fluid " src={web} alt="profile_img" />
            </div>
            <div className="col  p-3 m-0">
              <h2 className="d-inline-block  text-primary">Hello</h2>
              <p className="card-text fs-5">
                Welcome to my personal portfolio . <br />
                 My name is Mayur Gulhane , I
                am from Yavatmal , Maharastra. I have completed my gradution in
                B.E Computer Science from Sant Gadge Baba Amaravati University .
                I have done Full Stack Python Course.
              </p>
              <p className="card-text fs-5">
                I am urgently looking for a better opportunity. Having knowledge
                of technologies like Html, CSS, ReactJs, Python,
                Django, Django Rest Framework, Bootstrap.
              </p>
              <NavLink
                exact
                className="btn btn-danger rounded profile-button"
                to="/cv"
              >
                View CV
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
