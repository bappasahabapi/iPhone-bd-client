import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Banner.css";



const Banner = () => {


    return (
        <>
            <div className="banner d-flex  align-items-center ">
                <div className="row container">
                    <div className="col-md-12 ">
                        <h1 className="title "><span className="text-warning ">Apple Shop</span> Bangladesh </h1>
                        <h3 title-sm className="text-light fw-bold mt-5 ms-5 pb-3">Get <span className="text-warning">20% </span> discount for pre-booking in <span className="text-warning">1st December </span> 2021</h3>
                        <h5 title-sm className="text-light"> From $41.62/mo. for 24 mo. or $999 before trade‑in1  </h5>
                        <br />
                        <NavLink to="/order">
                            <button className="btn-warning   p-3 mt-3 fw-bold border-0 rounded-3"> 🟢 Explore Now ➡</button>
                        </NavLink>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;