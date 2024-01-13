import React from 'react';

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Card = (props) => {
    return (
        <>
            <div className="row ">
                <div className="col-11 mx-auto">
                    <div className="row row-cols-1 row-cols-md-3  gy-3 gx-5">
                        {
                            props.cardItems.map((item) => {
                                return (
                                    <div data-aos="fade-up" className="col" key={item.id} >
                                        <div className="card  shadow p-3 mb-5  rounded bg-light project_img" >
                                            <img src={item.image} className="card-img-top" alt="project_image" />
                                            <div className="card-body">
                                                <h5 className="card-title text-center text-wrap">{item.title}</h5>
                                                <div className="d-grid ">
                                                    <button className="btn btn-outline-primary  text-wrap "
                                                        type="button" onClick={handleURL(item.link)}>Click Here
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
