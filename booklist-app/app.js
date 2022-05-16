/**
 * Dom Selection 
 * Event Listener
 * Basic Validation
 * Creating Elements
 * Append
 */


// Dom Selection
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const btn = document.getElementById("btn");
const bookList = document.getElementById("book-list");


// Event Listener
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(title.value && author.value && year.value) {
        // Creating Elements
        const newRow = document.createElement("tr");
        const newTittle = document.createElement("th");
        newTittle.innerHTML = title.value;
        newRow.appendChild(newTittle)

        const newAuthor= document.createElement("th");
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor)

        const newYear= document.createElement("th");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear)

        bookList.appendChild(newRow)

    } else {
        alert("You have to fullfill this form")
    }
});