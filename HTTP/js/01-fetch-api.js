//import pokemonCardTpl from "../templates/pokemon-card.hbs";

const refs = {
    pokemonCard: document.querySelector("#pokemon-card"),
    pokemonContainer: document.querySelector(".pokemon-container"),
};
const r = fetch("https://pokeapi.co/api/v2/pokemon/2");

r.then((response) => {
    return response.json();
})
    .then((pokemon) => {
        const template = Handlebars.compile(refs.pokemonCard.innerHTML);
        const markup = template(pokemon);
        refs.pokemonContainer.insertAdjacentHTML("beforeend", markup);
    })
    .catch((error) => console.log(error));
