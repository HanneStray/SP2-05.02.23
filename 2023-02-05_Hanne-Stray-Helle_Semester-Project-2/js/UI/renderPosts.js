export function renderPosts(postsToRender) {
    const postContainer = document.querySelector(".posts");
    postContainer.innerHTML = "";

    postsToRender.forEach(function (post) {
        postContainer.innerHTML += `<div class="post"> 
                                    <h4>${ post.title }</h4> 
                                    </div>`;

    });
}