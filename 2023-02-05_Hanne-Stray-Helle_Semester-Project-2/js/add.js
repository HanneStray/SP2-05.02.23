import navMenu from "./components/navMenu.js";
import { baseUrl } from "./constants/api.js";
import { getToken } from "./UI/storage/storage.js";

navMenu();

const form = document.querySelector("#addForm");
const headline = document.querySelector("#headline");
const excerpt = document.querySelector("#excerpt");
const content = document.querySelector("#contentText");
//const code = document.querySelector("#contentCode");
//const tag = document.querySelector("#floatingSelect");
//const message ) document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    // message.innerHTML = ""; Har ingen message container i add.html

    const headlineValue = headline.value.trim();
    const excerptValue = excerpt.value.trim();
    const contentValue = content.value.trim();
    //const codeValue = code.value.trim();
    //const tagValue = tag.value.trim();
    //const messageValue = message.value.trim();

    console.log("headlineValue", "excerptValue", "contentValue");

    if (headlineValue.lenght === 0 || excerptValue.length === 0 || contentValue.length === 0) {
        // return displayMessage("warning", "please fill inn the missing boxes", ".message-container");
        console.log("missing text");
    }
    addProduct(headlineValue, excerptValue, contentValue);

}

async function addProduct(headline, excerpt, content) {
    const url = baseUrl + "/wp-json/wp/v2/posts";

    const token = getToken();

    const options = {
        method: "POST",
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
    }

    try {
        const response = await fetch(url, options);
        const json = response.json();

        if (json.date) {
            //displayMessage("success", "post added", ".message-container");
            //form.reset();
            location.href = "index.html";
        }
    }
    catch (error) {
        console.log(error);
    }

}

addProduct();