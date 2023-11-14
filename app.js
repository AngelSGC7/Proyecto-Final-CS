document.addEventListener("DOMContentLoaded", function() {
//mis variables globales arriba para buena practica//
    const searchInput = document.getElementById("searchInput");
    const typeFilter = document.getElementById("typeFilter");
    const searchBtn = document.getElementById("searchBtn");
    const pokemonInfoDiv = document.getElementById("pokemonInfo");



    const pokemonData = [
        {id: 143, name: "Snorlax", type: "Normal", image: "Snorlax.png" },
        {id: 133, name: "Eevee", type: "Normal", image: "eeve.webp" },
        {id: 428, name: "Lopunny", type: "Normal", image: "Lopunny.png" },
        {id: 1, name: "Bulbasaur", type: "Planta", image: "bulbasur.png" },
        {id: 3, name: "Venusaur", type: "Planta", image: "venusaur.png" },
        {id: 470, name: "Leafeon", type: "Planta", image: "leafeon.png" },
        {id: 4, name: "Charmander", type: "Fuego", image: "charmander.png" },
        {id: 59, name: "Arcanine", type: "Fuego", image: "arcanine.png" },
        {id: 6, name: "Charizard", type: "Fuego", image: "charizard.png" },
        {id: 7, name: "Squirtle", type: "Agua", image: "squirtle.png" },
        {id: 9, name: "Blastoise", type: "Agua", image: "blastoise.png" },
        {id: 130, name: "Gyarados", type: "Agua", image: "gyarados.png" },
    ];



    searchBtn.addEventListener("click", searchPokemon);

    function searchPokemon() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedType = typeFilter.value.toLowerCase();

        const results = pokemonData.filter(pokemon => 
            (pokemon.name.toLowerCase().includes(searchTerm) || searchTerm === "") &&
            (pokemon.type.toLowerCase().includes(selectedType) || selectedType === "")
        );

        displayPokemonResults(results);
    }

    function displayPokemonResults(results) {
        pokemonInfoDiv.innerHTML = "";

        if (results.length === 0) {
            pokemonInfoDiv.textContent = "No se encontraron resultados.";
            return;
        }

        results.forEach(pokemon => {
            const pokemonCard = document.createElement("div");
            pokemonCard.className = "pokemon-card";
            pokemonCard.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <p><strong>ID:</strong> ${pokemon.id}</p>
            <p><strong>Nombre:</strong> ${pokemon.name}</p>
            <p><strong>Tipo:</strong> ${pokemon.type}</p>
            `;
            pokemonInfoDiv.appendChild(pokemonCard);
        });
    }
});