document.addEventListener("DOMContentLoaded", function() {
//mis variables globales arriba para buena practica//
    const searchInput = document.getElementById("searchInput");
    const typeFilter = document.getElementById("typeFilter");
    const searchBtn = document.getElementById("searchBtn");
    const pokemonInfoDiv = document.getElementById("pokemonInfo");



 //agregar fotos y meterle el login y repasar cosas como las flechas el innerhtml y appendChild y repasar codigo aparte de agregar estilos//
    const pokemonData = [
        {id: 143, name: "Snorlax", type: "Normal" },
        {id: 133, name: "Eevee", type: "Normal" },
        {id: 428, name: "Lopunny", type: "Normal/Lucha" },
        {id: 1, name: "Bulbasaur", type: "Planta/Veneno" },
        {id: 3, name: "Venusaur", type: "Planta/Veneno" },
        {id: 470, name: "Leafeon", type: "Planta" },
        {id: 4, name: "Charmander", type: "Fuego" },
        {id: 59, name: "Arcanine", type: "Fuego" },
        {id: 6, name: "Charizard", type: "Fuego/Volador" },
        {id: 7, name: "Squirtle", type: "Agua" },
        {id: 9, name: "Blastoise", type: "Agua" },
        {id: 130, name: "Gyarados", type: "Agua" },
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
                <p><strong>ID:</strong> ${pokemon.id}</p>
                <p><strong>Nombre:</strong> ${pokemon.name}</p>
                <p><strong>Tipo:</strong> ${pokemon.type}</p>
            `;
            pokemonInfoDiv.appendChild(pokemonCard);
        });
    }
});