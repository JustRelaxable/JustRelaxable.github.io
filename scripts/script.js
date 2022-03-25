function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = convertRemToPixels(10);
    if (elementTop < windowHeight + elementVisible) {
      reveals[i].classList.add("active");
      setTimeout(revealComplete, 2000, reveals[i]);
    }
  }
}

function revealComplete(elem) {
  elem.classList.add("completed");
}

function openGithubPage() {
  window.open("https://github.com/JustRelaxable", "_blank");
}

function openLinkedinPage() {
  window.open("https://www.linkedin.com/in/taha-sokmen/", "_blank");
}

function sendMail() {
  window.location = "mailto:tahasokmen222@gmail.com";
}

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

window.addEventListener("scroll", reveal);
