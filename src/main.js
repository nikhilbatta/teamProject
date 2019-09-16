
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {} from './project';
import {RecipeByIngredients} from './mainingredient.js'

$(document).ready(function(){
  var arr = ["chicken"]
  callRecipeAPI(arr)

})
function callRecipeAPI(ingredients){
  console.log("itsworking")
 let recipeCall = new RecipeByIngredients();
 recipeCall.getIdByIngredient(ingredients).then(displayRecipe())// display function, if error then we call a error function)
}
function displayRecipe(){
 let recipe = JSON.parse(response)
 $('#body').append(`${recipe[0].title}`)
}
