const displayVisits = document.querySelector(".message-visits");

let numVisits = Number(window.localStorage.getItem("numVisits-discover")) || 0;

let dateOfVisit = Date.now(window.localStorage.getItem("dateOfVisit-discover")) || 0;

let datdat = new Date(dateOfVisit);

const msToDay = 24 * 60 * 60 * 1000;
let date1 = new Date(datdat);
let date2 = new Date(Date.now());


let subtract = Math.abs(date1.getTime() - date2.getTime());

let daysLeft = Math.round(subtract / msToDay);



if (numVisits == 0)
{
    displayVisits.innerHTML = `Welcome! Let us know if you have any questions`;
}
else if (daysLeft == 0)
{
    displayVisits.innerHTML = `Back so soon! Awesome!`;
}
else
{
    if (daysLeft == 1)
    {
        displayVisits.innerHTML = `You last visited ${daysLeft} day ago`;
    }
    else
    {
        displayVisits.innerHTML = `You last visited ${daysLeft} days ago`;
    }
}


numVisits++;

localStorage.setItem("numVisits-discover", numVisits);
localStorage.setItem("dateOfVisit-discover", dateOfVisit);