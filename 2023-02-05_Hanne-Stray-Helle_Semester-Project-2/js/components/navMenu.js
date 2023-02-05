import { getUsername } from "../UI/storage/storage.js";
import logoutButton from "./logoutButton.js";

export default function navMenu() {
    const { pathname } = document.location;

    const navBar = document.querySelector(".nav-menu");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${ pathname === "/login.html" ? "active" : "" } nav-link"> Login </a>`;

    if (username) {
        authLink = `<button id="logout" class="btn btn-primary">logout</button>`;
    }

    navBar.innerHTML = `<div class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid">
                        <a class="navbar-brand" href="index.html">Wikiweb</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <a href="/" class="${ pathname === " /" || pathname === "/index.html" ? "active" : "" } nav-link"> Home </a>
                        <a href="login.html" class="${ pathname === " / login.html" ? "active" : "" } nav-link" > Login </a>
                         ${ authLink }
                        </div>
                        </div>
                        </div> `;
    logoutButton();
}

