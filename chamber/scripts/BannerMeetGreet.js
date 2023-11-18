// CONST FOR EACH HTML ELEMENT
// banner 1...
const buttonExit = document.querySelector("#exit");
const bannerMeet = document.querySelector("#bannerMeet");
const pBanner = document.querySelector("#bannerInfop");
// banner large...
const buttonExitLarge = document.querySelector("#exitLarge");
const bannerMeetLarge = document.querySelector("#bannerMeetLarge");
const pBannerLarge = document.querySelector("#bannerInfopLarge");

// SHOW BANNER ONLY MONDAY, TUESDAY, AND WEDNESDAY
// const theMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const nowDate = Date.now();
const newDate = new Date(nowDate);
const day = 1;//newDate.getDay();

// const theDate = newDate.getDate();
// const theMonth = newDate.getMonth(); 
console.log(day); // just to testing

if (day === 1)
{
    bannerMeet.classList.add("show");
    pBanner.innerHTML = `Wednesday at 7:00 p. m.`;

    bannerMeetLarge.classList.add("show");
    pBannerLarge.innerHTML = `Wednesday at 7:00 p. m.`;

}
else if (day === 2)
{
    bannerMeet.classList.add("show");
    pBanner.innerHTML = `Tomorrow at 7:00 p. m.`;

    bannerMeetLarge.classList.add("show");
    pBannerLarge.innerHTML = `Tomorrow at 7:00 p. m.`;
}
else if (day === 3)
{
    bannerMeet.classList.add("show");
    pBanner.innerHTML = `¡Today at 7:00 p. m.!`;

    bannerMeetLarge.classList.add("show");
    pBannerLarge.innerHTML = `¡Today at 7:00 p. m.!`;
}

// CLOSE BANNER 1
buttonExit.addEventListener("click", () =>{
    bannerMeet.classList.add("noShow");
    bannerMeetLarge.classList.add("noShow");
})

// CLOSE BANNER LARGE
buttonExitLarge.addEventListener("click", () =>{
    bannerMeetLarge.classList.add("noShow");
    bannerMeet.classList.add("noShow");
})