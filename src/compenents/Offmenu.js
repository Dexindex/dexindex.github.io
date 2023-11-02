import React from "react";
import data from "../data.json";

export default function Offmenu() {
  return (
    <div
      class="offcanvas offcanvas-end header-offcanvasmenu"
      tabindex="-1"
      id="offcanvasMenuRight"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="row ">
          <div class="col-lg-7 col-xl-6">
            <div class="contact-info-wrap">
              <div class="contact-inner">
                <address class="address">
                  <span class="title">Contact Information</span>
                  <p>{data.links.address}</p>
                </address>
                <address class="address">
                  <span class="title">We're Available 24/7. Call Now.</span>
                  <a class="tel" href={"tel:" + data.personalInfo.phone}>
                    <i class="fas fa-phone"></i>
                    {data.personalInfo.phone}
                  </a>
                  <a class="tel" href={"mailto:" + data.personalInfo.email}>
                    <i class="fas fa-envelope"></i>
                    {data.personalInfo.email}
                  </a>
                </address>
              </div>
              <div class="contact-inner">
                <h5 class="title">Find us here</h5>
                <div class="contact-social-share">
                  <ul class="social-share list-unstyled">
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
