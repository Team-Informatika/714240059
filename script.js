import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/url.js"

onHashChange(ada);
function ada() {
    console.log(getHash());
    const hashpath = getHash();
    if (hashpath === "data") {
        console.log("nyari data?, ya disini aja");
        renderHTML("container", "data.html", renderDataDariJson);
    }
}

function renderDataDariJson() {
    getJSON("https://t.if.co.id/json/rafli.json", responseFunction);
}

function responseFunction(isi) {
    console.log(isi);

    const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = ""; // Hapus isi lama sebelum menambahkan data baru

    const avatar = document.createElement("img");
    avatar.src = isi.data.Poto;
    avatar.alt = "Avatar";
    avatar.id = "avatar";

    const name = document.createElement("h3");
    name.id = "konten";
    name.textContent = isi.data.Name;

    const ug = document.createElement("p");
    ug.id = "ug";
    ug.textContent = isi.data.Ug;

    const skill = document.createElement("p");
    skill.id = "skill";
    skill.textContent = isi.data.Skill;

    const rate = document.createElement("p");
    rate.id = "rate";
    rate.textContent = isi.data.Rate;

    const socialContainer = document.createElement("div");
    socialContainer.classList.add("social-icons");
    socialContainer.id = "so";

    isi.data.socialIcons.icons.forEach((icon) => {
        const linkElement = document.createElement("a");
        linkElement.href = icon.url;
        linkElement.target = "_blank";
        linkElement.rel = "noopener noreferrer";

        const iconElement = document.createElement("i");
        iconElement.id = icon.id;
        iconElement.className = icon.class;
        iconElement.title = icon.type;

        linkElement.appendChild(iconElement);
        socialContainer.appendChild(linkElement);
    });
}