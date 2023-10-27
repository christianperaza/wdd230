const input = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#list"); //The first three lines establish references to the DOM elements that we will be using in the program. Note that they only reference the HTML element objects, not any properties.


let chaptersArray = getChapterList() || []; //The array declaration initializes the chaptersArray variable with the list of chapters returned by the getChapterList() function or an empty array if the function call returns null or undefined.

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", function() {
    
        if (input.value != "")
        { 
            displayList(input.value);
            chaptersArray.push(input.value);

            setChapterList();

            input.value = "";
            input.focus();
        }
        else {
            window.alert("You don't have entered a book or chapter! Please enter a book.");
        };

    
});

function displayList(item)
{
    
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.innerHTML = item;
    deleteButton.innerHTML = "❌";
    deleteButton.classList.add("delete");

    li.append(deleteButton);
    list.append(li);

    deleteButton.ariaLabel = "Delete Book";

    

    deleteButton.addEventListener("click", function()
    {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
        
    });

}

function setChapterList()
{
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList()
{
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter)
{
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

