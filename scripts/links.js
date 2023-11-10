const baseURL = "https://iamfisherman.github.io/wdd230/";

const linksURL = "https://iamfisherman.github.io/wdd230/data/links.json";

const ul = document.querySelector("#sectionJSON");



async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.table(data.lessons);

    displayLinks(data.lessons);
}

getLinks();


const displayLinks = (weeks) => {
    let numberOfWeek = 1;

    weeks.forEach((week) => {

        
        
        let li = document.createElement("li");
        let span = document.createElement("span");

        span.innerHTML = `Week ${numberOfWeek++} - `;
        li.appendChild(span);
        

        for (let index = 0; index < week.links.length; index++) {
            let link = document.createElement("a");
            link.setAttribute("target", "_blank");
            link.setAttribute("href", week.links[index].url);
            link.innerHTML = `${week.links[index].title}`;
            
            if (index >= 1)
            {
                let span2 = document.createElement("span");
                span2.innerHTML = " | ";

                li.appendChild(span2);
            }
            

            li.appendChild(link);
        }
        

        
        ul.appendChild(li);

    })

}