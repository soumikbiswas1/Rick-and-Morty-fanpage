const APIURL = "https://rickandmortyapi.com/api/character";
const SEARCHAPI =
"https://rickandmortyapi.com/api/character/?name=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get favourite characters
getCharacters(APIURL);

async function getCharacters(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showCharacters(respData.results);
}

function showCharacters(characters){
    //clear main
    main.innerHTML = "";

    characters.forEach((character) => {
        const {  name, image, gender, status }=character;

        const characterEl =document.createElement("div");
        characterEl.classList.add("character");

        characterEl.innerHTML = `
            <img
                src="${image}"
                alt="${name}}"
            />
            <div class="overview">
            
            Name:  ${name}
            <br>
            <br>
            Gender:  ${gender}
            <br>
            <br>
            Status:  ${status}
        </div> 
        `;
        console.log(character.image);
        
        main.appendChild(characterEl);
    });
}




form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm){
        getCharacters(SEARCHAPI + searchTerm);

        search.value = "";
    }
});