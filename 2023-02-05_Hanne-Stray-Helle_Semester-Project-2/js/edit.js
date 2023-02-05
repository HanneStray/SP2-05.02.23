import { baseUrl } from "./constants/api.js";
//import displayMessage from "./components/displaymessage.js";
import navMenu from "./components/navMenu.js";

const postsUrl = baseUrl + "/wp-json/wp/v2/posts/";
const postsContainer = document.querySelector(".posts");

navMenu();


(async function getPosts() {

    try {
        const response = await fetch(postsUrl);

        const posts = await response.json();

        postsContainer.innerHTML = "";

        for (let i = 0; i < posts.length; i++) {
            console.log(posts[i]);

            postsContainer.innerHTML += `<div class="col-sm-4">
                                        <div class="card">
                                        <div class="card-body">
                                        <h1 class="card-title"> ${ posts[i].title.rendered } </h1> 
                                        <p class="tags"> ${ posts[i].tags.rendered } </p>
                                        <p> ${ posts[i].date } </p>
                                        <a href="editPost.html?id=${ posts[i].id }">
                                        <button class="detail-btn btn btn-primary"> Edit </button>
                                        </a>`;

        }
    } catch (error) {
        //postsContainer.innerHTML = "Error, not working";
    }
})();

