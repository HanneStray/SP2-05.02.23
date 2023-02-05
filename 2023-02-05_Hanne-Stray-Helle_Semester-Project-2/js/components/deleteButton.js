import { baseUrl } from "../constants/api.js";
import { getToken } from "../UI/storage/storage.js";

export default function deleteButton(id) {
    const container = document.querySelector(".delete-container");

    container.innerHTML = `<button type="button" class="delete btn btn-primary"> Delete </button>`

    const button = document.querySelector("button.delete")

    button.onclick = async function () {
        console.log(id);

        const confirmDelete = confirm("Do you want to delete this post?");
        console.log(confirmDelete);

        if (confirmDelete) {

            const url = baseUrl + "/wp-json/wp/v2/posts/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                body: JSON.stringify({
                    id: id,
                    force: "true",
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ token }`,
                },
            };

            try {
                const response = await fetch(url, options);
                const json = await response.json();

                location.href = "index.html";

                console.log(json);
            }
            catch (error) {
                console.log(error);
            }
        }
    };

}




