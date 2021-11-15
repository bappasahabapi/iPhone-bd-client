import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 footer">
      <div className="">
        <div className="row">
          <div className="col-md-4  ">
            <div className="first-cart  ">
              <h1 className="text-info">LINKS</h1>

              <a className="text-light fs-10 ankor" href="#">👉 New Arrives</a> <br />
              <a className="text-light fs-10 ankor" href="#">Offers</a> <br />
              <a className="text-light fs-10 ankor" href="#">👉Explore</a> <br />


            </div>
          </div>
          <div className="col-md-4 ">
            <h1 className="text-info"  >Hotline</h1>
            <p>  Pre-Orders: +88098765434 <br />
              Apple warranty: +8801771241673 <br />
              Service: +8801824666536
            </p>
          </div>
          <div className="col-md-4">
            <div className="second-part">
              <h1 className="text-info" >CONTACT US</h1>

              <small className="mt-5">Office: 46 Mina Tower, Khilkhao Dhaka </small>
              <br />
              <small className="mt-3">Phone: 01789845674</small>
              <br />
              <small className="mt-3">Fax: 08 06 4752 1499</small>
              <br />
              <small className="mt-3">Email: applebd.com </small>
            </div>
          </div>
        </div>
        <hr className="text-warning" />
        <div className="botton text-center">
          <small className="text-info" >2020  All Rights Reserved by</small>
          <br />
          <small> <a className="text-light copy" href="https://github.com/bappabappa">© Coder Bappa  </a></small>

        </div>
      </div>
    </div>)
};

export default Footer;
