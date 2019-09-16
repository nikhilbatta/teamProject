export function callRecipeAPI(ingredients){
  let recipeCall = new recipeByIngredients();
  getIdByIngredient(ingredients).then(dispayRecipe(),)// display function, if error then we call a error function)
}
export function displayRecipe(){
  let recipe = JSON.parse(response)
  $('#body').append(`${recipe[0].title}`)
}
