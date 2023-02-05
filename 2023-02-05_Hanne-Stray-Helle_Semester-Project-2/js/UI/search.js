import { renderPosts } from "./renderPosts.js";

export function searchPosts(posts) {
    const search = document.querySelector("#search");

    search.onkeyup = fucntion(event); {

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredPosts = posts.filter(function (post) {
            if (post.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });
        renderPosts(filteredPosts);
    };
}
