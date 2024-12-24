"use strict";

const animateGift = () => {
  document.getElementsByClassName("box-body")[0].classList.toggle("active");
  document
    .getElementsByClassName("box-lid")[0]
    .classList.toggle("box-lid-animation");
  //   window
  //     .getComputedStyle(
  //       document.getElementsByClassName("box-bowtie")[0],
  //       "::before"
  //     )
  //     .getPropertyValue("animation");

  //   window
  //     .getComputedStyle(
  //       document.getElementsByClassName("box-bowtie")[0],
  //       "::after"
  //     )
  //     .getPropertyValue("animation");
};
