const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  const pokemonId = Math.floor(Math.random() * 898) + 1; // Pokémon ID from 1 to 898
  const pokemonImage = document.querySelector(".pokemon-image");
  const pokemonName = document.querySelector(".pokemon-name");
  const pokemonIdDiv = document.querySelector(".pokemon-id");

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((data) => {
      pokemonImage.src = data.sprites.front_default;
      pokemonName.textContent =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);
      pokemonIdDiv.textContent = `#${data.id} – Type : ${data.types
        .map((type) => type.type.name)
        .join(", ")}`;
    })
    .catch((error) => console.error("Error fetching Pokémon:", error));
});
