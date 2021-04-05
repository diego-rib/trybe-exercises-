document.querySelector("#container").style.backgroundColor = "#f3f3f3";

document.querySelector("#header-container").style.backgroundColor = "#00b069";

let emergencys = document.querySelectorAll(".emergency-tasks");
for (let index = 0; index < emergencys.length; index += 1) {
  emergencys[index].style.backgroundColor = "#ff9f84";
}
let emergencysTitle = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencysTitle.length; index += 1) {
  emergencysTitle[index].style.backgroundColor = "#a500f3";
}

let notEmergencys = document.querySelectorAll(".no-emergency-tasks");
for (let index = 0; index < notEmergencys.length; index += 1) {
  notEmergencys[index].style.backgroundColor = "#f9db5e";
}
let notEmergencysTitle = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < notEmergencysTitle.length; index += 1) {
  notEmergencysTitle[index].style.backgroundColor = "#232525";
}

document.querySelector("#footer-container").style.backgroundColor = "#003533";
