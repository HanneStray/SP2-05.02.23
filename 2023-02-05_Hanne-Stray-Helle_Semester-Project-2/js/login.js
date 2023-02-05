//import displayMessage from "./components/displayMessage.js";
import navMenu from "./components/navMenu.js";
import { baseUrl } from "./constants/api.js";
import { saveToken, saveUser } from "./UI/storage/storage.js";

const loginForm = document.querySelector("#loginform");
const username = document.querySelector("#login_username");
const password = document.querySelector("#login_password");
//const logout = document.querySelector("#logout");
//const editToggle = docuement.querySelector(".edit-toggle");
//const message = document.querySelector('.message-container');
//const loginUrl = baseUrl + "/wp-json/jwt-auth/v1/token";

navMenu();

loginForm.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    //message.innerHTML = "";
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.lenght === 0 || passwordValue.length === 0) {
        //return displayMessage("warning", "fill in this form", ".message-container");
        console.log(error);
    }

    login(usernameValue, passwordValue);
}

async function login(username, password) {

    const url = baseUrl + "/wp-json/jwt-auth/v1/token";

    const data = JSON.stringify({ username: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json);

        if (json.token) {

            saveToken(json.token);
            saveUser(json.user_display_name);

            location.href = "loggedIn.html";
        }

        if (json.error) {
            //displayMessage("warning", "Incorrect username or password", ".message-container");
            console.log("error");
        }

    } catch (error) {
        console.log(error)
    }

}



