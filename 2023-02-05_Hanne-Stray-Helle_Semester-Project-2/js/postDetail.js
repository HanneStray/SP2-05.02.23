import navMenu from "./components/navMenu.js";
import { baseUrl } from "./constants/api.js";

const detailContainer = document.querySelector(".detail-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const detailUrl = baseUrl + "/wp-json/wp/v2/posts/" + id;

console.log(detailUrl);

navMenu();

(async function () {
    try {
        const response = await fetch(detailUrl);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    } catch (error) {
        //displayMessage("error", error, ".detail-container");
    }
})();

function createHtml(posts) {
    detailContainer.innerHTML = `<div class="col-sm-4">
                                <div class="card">
                                <div class="card-body">
                                <h1 class="card-title"> ${ posts.title.rendered } </h1> 
                                <p class="card-text"> ${ posts.content.rendered } </p>
                                <p> ${ posts.date } </p> `;
}


