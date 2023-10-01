let date = new Date();
let currentYear = date.getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;

let lastModified = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = lastModified;