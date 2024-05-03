function cakes(recipe, pantry) {
  const ingredients = Object.keys(recipe);
  const supplies = Object.keys(pantry);
  const missingSupplies = ingredients.filter((ingredient) => !supplies.includes(ingredient));
  if (missingSupplies.length) {
    return 0;
  }
  const quantitiesArray = [];
  ingredients.map((ingredient) => {
    quantitiesArray.push(Math.floor(pantry[ingredient]/recipe[ingredient]))
  })
  quantitiesArray.sort((a, b) => a - b);
  return quantitiesArray[0];
}

console.log(cakes({apples: 2, oranges: 1}, {apples: 6, oranges: 0}))