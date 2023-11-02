import React from "react";
import data from "../data.json";

export default function Offmenu() {
  return (
    <div
    className="offcanvas offcanvas-end header-offcanvasmenu"
    tabIndex="-1"
      id="offcanvasMenuRight"
    >
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="row ">
          <div className="col-lg-7 col-xl-6">
            <div className="contact-info-wrap">
              <div className="contact-inner">
                <address className="address">
                  <span className="title">Contact Information</span>
                  <p>{data.links.address}</p>
                </address>
                <address className="address">
                  <span className="title">We're Available 24/7. Call Now.</span>
                  <a className="tel" href={"tel:" + data.personalInfo.phone}>
                    <i className="fas fa-phone"></i>
                    {data.personalInfo.phone}
                  </a>
                  <a className="tel" href={"mailto:" + data.personalInfo.email}>
                    <i className="fas fa-envelope"></i>
                    {data.personalInfo.email}
                  </a>
                </address>
              </div>
              <div className="contact-inner">
                <h5 className="title">Find us here</h5>
                <div className="contact-social-share">
                  <ul className="social-share list-unstyled">
                    <li>
                      <a href={data.links.facebook}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={data.links.twitter}>
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href={data.links.linkedin}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href={data.links.instagram}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={data.links.youtube}>
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
