import React from 'react'
import port1 from "./images/certificate1.png";
import port2 from "./images/certificate2.png";
import port3 from "./images/certificate3.png";

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const link1 = "https://www.freecodecamp.org/certification/fcc58f1d3a3-b757-4f63-9f53-d1eef1aa59db/responsive-web-design";
const link2 = "https://www.freecodecamp.org/certification/fcc58f1d3a3-b757-4f63-9f53-d1eef1aa59db/javascript-algorithms-and-data-structures";
const link3 = "https://www.freecodecamp.org/certification/fcc58f1d3a3-b757-4f63-9f53-d1eef1aa59db/front-end-libraries";

const Certificate = () => {
  return (
    <>
      <div className="row  justify-content-md-center mx-auto  py-3  bg-secondary">
        <h1 className="text-center">Certificate</h1>
        <div className="col col-lg-6">
          <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" onClick={handleURL(link1)} >
                <img src={port1} className="d-block w-100" alt="Certificate 1" />
              </div>
              <div className="carousel-item" onClick={handleURL(link2)} >
                <img src={port2} className="d-block w-100" alt="Certificate 2" />
              </div>
              <div className="carousel-item" onClick={handleURL(link3)} >
                <img src={port3} className="d-block w-100" alt="Certificate 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Certificate;
