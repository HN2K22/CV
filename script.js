const linkedin = document.querySelector(".linkedin");
const gmail = document.querySelector(".gmail");
const github = document.querySelector(".github");
const cv = document.querySelector(".cv");

const linkArray = [
  {
    button: linkedin,
    link: "https://www.linkedin.com/in/hitesh-nagvekar-a09707b5/",
  },
  {
    button: gmail,
    link: "mailto:hiteshlevis1@gmail.com",
  },
  {
    button: github,
    link: "https://github.com/HN2K22",
  },
  {
    button: cv,
    link: "https://hn2k22.github.io/CV/",
  },
];

function clickEvents(button, link) {
  if (button) {
    button.addEventListener("click", () => {
      document.location.href = link;
    });
  }
}

linkArray.forEach(({ button, link }) => {
  clickEvents(button, link);
});
