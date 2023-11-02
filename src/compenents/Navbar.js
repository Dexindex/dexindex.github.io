import React from 'react';
import data from '../data.json';

export default function Navbar() {
  return (
      <header className="header axil-header header-style-3">
        <div id="axil-sticky-placeholder"></div>
        <div className="axil-mainmenu">
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <a href="index.html"><img className="light-version-logo" src="assets/media/black.png" alt="logo" /></a>
                <a href="index.html"><img className="dark-version-logo" src="assets/media/white.png" alt="logo" /></a>
                <a href="index.html"><img className="sticky-logo" src="assets/media/black.png" alt="logo" /></a>
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="header-social-link">
                    <ul className="social-icon-list list-unstyled">
                      <li><a href={data.links.facebook}><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href={data.links.twitter}><i className="fab fa-github"></i></a></li>
                      <li><a href={data.links.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href={data.links.instagram}><i className="fab fa-instagram"></i></a></li>
                      <li><a href={data.links.youtube}><i className="fab fa-youtube"></i></a></li>
                    </ul>
                  </li>
                  <li className="sidemenu-btn">
                    <button className="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuRight">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <ul>
                      <li title="Light Mode">
                        <a className="setColor light" data-theme="light">
                          <i className="fal fa-lightbulb-on"></i>
                        </a>
                      </li>
                      <li title="Dark Mode">
                        <a className="setColor dark" data-theme="dark">
                          <i className="fas fa-moon"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
