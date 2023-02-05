
import { clearStorage } from "../UI/storage/storage.js";

export default function logoutButton() {
    const button = document.querySelector("#logout")

    if (button) {
        button.onclick = function () {
            const logout = confirm("are you sure you want to logout?");

            if (logout) {
                clearStorage();
                window.location = "index.html";
            }
        };
    }
}
