import React from 'react'

export default function Loaders() {
  return (
    <div>
        <a href="#main-wrapper" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up"></i>
    </a>

    <div id="preloader"></div>

    <div className="my_switcher d-none d-lg-block">
        <ul>
            <li title="Light Mode">
                <a  className="setColor light" data-theme="light" style={{cursor:"pointer"}}>
                    <i className="fal fa-lightbulb-on"></i>
                </a>
            </li>
            <li title="Dark Mode">
                <a  className="setColor dark" data-theme="dark" style={{cursor:"pointer"}}>
                    <i className="fas fa-moon"></i>
                </a>
            </li>
        </ul>
    </div>
    </div>
  )
}
