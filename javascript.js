const search = document.querySelector("#search-button");

search.addEventListener("click", function () {
    // Perform search function - log in console for now.
    console.log(document.querySelector("#search-bar").value);
});

search.addEventListener("keydown", function (event) {
    // Perform search function - log in console for now.
    if (event.key === "Enter") {
        console.log(document.querySelector("#search-bar").value);
    }
});