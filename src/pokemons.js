// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
  return pokemons.filter((pokemon) => pokemon.type.includes('Fire'));
};
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (!pokemons.length) return 0;    
    return pokemons.reduce((acc, curr) => (curr.height < acc.height ? curr : acc)).name;
  };

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    if (!pokemons.length) return 0;
  const totalCandyCount = pokemons.reduce((acc, curr) => {
    return curr.candy_count ? acc + curr.candy_count : acc;
  }, 0);
  const pokemonsWithCandyCount = pokemons.length;
  const average = pokemonsWithCandyCount ? totalCandyCount / pokemonsWithCandyCount : 0;
  return Math.round(average * 100) / 100;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    if (pokemons.length === 0) return 0;
    return pokemons.filter(pokemon => pokemon.type.includes("Ground")).slice(0, 10).map(pokemon => pokemon.img);
};

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    if (pokemons.length === 0) return 0;
    const pikachuWeight = pokemons.find(pokemon => pokemon.name === "Pikachu").weight;
    return pokemons.filter(pokemon => parseFloat(pokemon.weight) > parseFloat(pikachuWeight)).map(pokemon => pokemon.name);
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    if (pokemons.length === 0) return [];
    const orderedPokemon = JSON.parse(JSON.stringify(pokemons));
  return orderedPokemon.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 20).map((pokemon) => pokemon.name);
};

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
  return pokemons.filter((pokemon) => pokemon.weaknesses.length === 1).slice(0, 15).map((pokemon) => pokemon.name);
};
