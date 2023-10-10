const input = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", function() {
    if (input.value != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.innerHTML = input.value;
        deleteButton.innerHTML = "❌";
        li.append(deleteButton);
        list.append(li);

        input.focus();
        input.value = "";

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
            input.value = "";
        });
    }
    else {
        window.alert("You don't have entered a book or chapter! Please enter a book.");
    };
});