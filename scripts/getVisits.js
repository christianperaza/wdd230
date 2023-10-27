const displayVisits = document.getElementById("visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0)
{
    displayVisits.innerHTML = numVisits;
}
else
{
   displayVisits.innerHTML = `This is your first visit. Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);