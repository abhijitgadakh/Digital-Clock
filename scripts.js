"use strict mode";

window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
  let date = new Date();
  // date.setTime(600000000);
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const time = `${h}:${m}<small> ${s}|${session}</small>`;
  // console.log(time);

  document.getElementById("display-clock").innerHTML = time;
  setTimeout(showTime, 1000);

  //Body Background

  let bg;
  const userName = "Abhijit";

  const user = document.getElementById("user");
  // user.innerHTML = `Good Night ${userName}`;

  if (h < 8 && session === "AM") {
    bg = `url(01.jpg)`;
    user.innerHTML = `Good Morning, ${userName}.`;
  } else if (h < 11 && session === "AM") {
    bg = `url(01.jpg)`;
    user.innerHTML = `Good Day, ${userName}.`;
  } else if (h < 8 && session === "PM") {
    bg = `url(02.jpg)`;
    user.innerHTML = `Good Afternoon, ${userName}.`;
  } else {
    bg = `url(04.jpg)`;
    user.innerHTML = `Good Night, ${userName}.`;
  }

  const body = document.querySelector("body");

  body.style.background = `${bg} center/cover`;
}

const focus = document.querySelector(".focus input");

focus.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.querySelector(
      ".focus"
    ).innerHTML = `<h5>Today:</h5><h1>${focus.value}</h1>`;
  }
});
