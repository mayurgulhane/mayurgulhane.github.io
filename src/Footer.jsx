import React from "react";
import { Twitter, LinkedIn, GitHub, Instagram } from "@material-ui/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {

  const [user, setUser] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    const { name, contact, email, message } = user;

    if (name && contact && email && message) {
      try {
        
        const res = await fetch('https://formdata-1fb28-default-rtdb.firebaseio.com/UserData.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify({
            name,
            contact,
            email,
            message,
          }),
        });
 
        if (res.ok) {
          setUser({
            name: "",
            contact: "",
            email: "",
            message: "",
          });
          alert("Successfully Submitted...");
        } else {
          console.error("Error submitting data to Firebase:", res.statusText);
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <>
      <footer style={{ backgroundColor: "#1f2235", color: "#fff" }}>
        <div className="container py-1 " >
          <h1 className="text-center">Contact Me...</h1>
          <div className="row align-items-center ">
            <div className="col-sm-6 col-lg-5 order-2  order-lg-1">
              <h3 className="text-center"> Socialize With Me...!</h3>
              <div className="row text-center  justify-content-center my-lg-5">
                <div
                  className="col-2 mx-md-2 "
                  onClick={handleURL(
                    "https://www.linkedin.com/in/mayurgulhane/"
                  )}
                >
                  <LinkedIn
                    fontSize="large"
                    className="icon_1  rounded-circle p-1"
                  />
                </div>
                <div
                  className="col-2 mx-sm-2"
                  onClick={handleURL("https://github.com/mayurgulhane")}
                >
                  <GitHub
                    fontSize="large"
                    className="icon_2  rounded-circle p-1"
                  />
                </div>
                <div
                  className="col-2 mx-sm-2"
                  onClick={handleURL("https://www.instagram.com/mr.mayurgulhane/")}
                >
                  <Instagram
                    fontSize="large"
                    className="icon_3   rounded-circle p-1"
                  />
                </div>
                <div
                  className="col-2 mx-sm-2"
                  onClick={handleURL("https://twitter.com/MayurGulhane7")}
                >
                  <Twitter
                    fontSize="large"
                    className="icon_4 rounded-circle p-1"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-5 my-2  ms-auto order-1 order-lg-2 mb-2 card-header border-danger">

              <form className="row g-3 " method="POST">
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={user.name}
                    onChange={getUserData}
                    placeholder="Name"
                    id="inputName"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputTel" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    name="contact"
                    value={user.contact}
                    onChange={getUserData}
                    placeholder="Contact Number"
                    id="inputTel"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={getUserData}
                    placeholder="E-mail"
                    id="inputEmail4"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={user.message}
                    onChange={getUserData}
                    placeholder="Message..."
                    id="floatingTextarea"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitData}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="nav align-content-center justify-content-center">
          <NavLink exact className="nav-link " to="/" >HOME</NavLink>
          <NavLink exact className="nav-link" to="/about">ABOUT US</NavLink>
          <NavLink exact className="nav-link" to="/cv">CV</NavLink>
          <NavLink exact className="nav-link" to="/work">WORK</NavLink>
        </div>
        <div className="text-center bg-dark p-2" >Copyright &copy; 2024 <strong>Portfolio Website</strong>. | Designed by Mayur</div>
      </footer>
    </>
  );
};

export default Footer;



