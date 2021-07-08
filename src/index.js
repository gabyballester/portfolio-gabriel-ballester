import initTilt from "./js/tilt";
import initSr from "./js/sr";
import resumeSP from "./assets/resumeSP.pdf";
import resumeEN from "./assets/resumeEN.pdf";
import intro from "./assets/intro.pdf";

import "./style/main.scss";

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

function addResumeSP(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resumeSP");
  resumeButton.setAttribute("href", pdf);
}

function addResumeEN(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resumeEN");
  resumeButton.setAttribute("href", pdf);
}

function addIntro(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--intro");
  resumeButton.setAttribute("href", pdf);
}

initSr();
initTilt();

// uncomment this if you want to attach your resume
addResumeSP(resumeSP);
addResumeEN(resumeEN);
addIntro(intro)
