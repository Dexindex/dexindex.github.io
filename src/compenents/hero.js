import React from "react";
import data from '../data.json';

export default function Hero() {
  return (
      <section class="banner banner-style-3">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="banner-content">
                <span
                  class="subtitle"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="100"
                >
                  {data.description}
                </span>

                <div
                  class="btn-group"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                >
                  <a href="" class="axil-btn btn-fill-primary btn-large">
                    GITHUB
                  </a>
                  <a href="about-us.html" class="about-btn">
                    About Me
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-thumbnail">
                <div
                  class="large-thumb"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="500"
                >
                  <img
                    class="paralax-image"
                    src="assets/media/banner/banner-thumb-6.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="list-unstyled shape-group-20">
          <li
            class="shape shape-1"
            data-sal="slide-down"
            data-sal-duration="500"
            data-sal-delay="100"
          >
            <img src="assets/media/others/bubble-32.png" alt="Bubble" />
          </li>
          <li
            class="shape shape-2"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="200"
          >
            <img src="assets/media/others/bubble-33.png" alt="Bubble" />
          </li>
          <li
            class="shape shape-4"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="700"
          >
            <img src="assets/media/others/bubble-14.png" alt="Bubble" />
          </li>
          <li
            class="shape shape-5"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="700"
          >
            <img src="assets/media/others/bubble-4.png" alt="Bubble" />
          </li>
          <li
            class="shape shape-6"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="700"
          >
            <img src="assets/media/others/bubble-30.png" alt="Bubble" />
          </li>
          <li
            class="shape shape-7"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="700"
          >
            <img src="assets/media/others/bubble-31.png" alt="Bubble" />
          </li>
          <li class="shape shape-8 marque-images"></li>
        </ul>
      </section>
  );
}
