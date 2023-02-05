import navMenu from "./components/navMenu.js";
import { baseUrl } from "./constants/api.js";
import { getToken } from "./UI/storage/storage.js";
import deleteButton from "./components/deleteButton.js";

navMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const detailUrl = baseUrl + "/wp-json/wp/v2/posts/" + id;

const form = document.querySelector("#addForm");
const headline = document.querySelector("#headline");
const excerpt = document.querySelector("#excerpt");
const content = document.querySelector("#contentText");
const idInput = document.querySelector("#id");
//const code = document.querySelector("#contentCode");
//const tag = document.querySelector("#floatingSelect");
//const message ) document.querySelector(".message-container");

(async function () {
    try {
        const response = await fetch(detailUrl);
        const details = await response.json();

        headline.value = details.title.rendered;
        excerpt.value = details.excerpt.rendered;
        content.value = details.content.rendered;
        idInput.value = details.id;

        deleteButton(details.id);

        console.log(details);
    } catch (error) {
        console.log(error);

    }

})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    //message.innerHTML = "";

    const headlineValue = headline.value.trim();
    const excerptValue = excerpt.value.trim();
    const contentValue = content.value.trim();
    const idValue = idInput.value;
    //const codeValue = code.value.trim();
    //const tagValue = tag.value.trim();
    //const messageValue = message.value.trim();

    if (headlineValue.lenght === 0 || excerptValue.length === 0 || contentValue.length === 0) {
        // return displayMessage("warning", "please fill inn the missing boxes", ".message-container");
        console.log("missing text");
    }

    udpatePost(headlineValue, excerptValue, contentValue, idValue);

}

async function udpatePost(headline, excerpt, content, id) {
    const url = baseUrl + "/wp-json/wp/v2/posts/" + id;

    const token = getToken();

    const options = {
        method: "PUT",
        body: JSON.stringify({
            title: headline,
            excerpt: excerpt,
            content: content,
            status: "publish",
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ token }`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.modified) {
            //displayMessage("sucess", "updated post", ".message-container");
        }

    }
    catch (error) {
        console.log(error);
    }
}