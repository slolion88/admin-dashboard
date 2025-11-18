const search = document.querySelector("#search-button");
const searchbar = document.querySelector("#search-bar");

search.addEventListener("click", function () {
    console.log(searchbar.value);
});

searchbar.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        console.log(searchbar.value);
    }
});