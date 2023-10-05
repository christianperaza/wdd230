let date = new Date();
let currentYear = date.getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;

let lastModified = new Date(document.lastModified);
let dateString = lastModified.toDateString();
let time = lastModified.toLocaleTimeString();

document.getElementById("lastModified").innerHTML = dateString + ", " + time;