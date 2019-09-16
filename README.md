# _Friend Cook_

#### _This program helps groups plan meals and use foods they already have_

#### By _**Ethan Samuels-Ellingson, Nikhil Batta, Joel Stockamp, Carrie Schmid**_

## Description

This website allows users to search for recipes and plan portions for groups. Users can list foods they have and that can be used by the group.

## Specifications


Scenario: user adds an ingredient to share with group
When a user enters an ingredient and clicks "share"
Given the input is valid
Then the ingredient is added to the array and immediately displayed

Scenario:user constructs an array of ingredients to search for recipes
When a user clicks ingredients in shared ingredients or recommendations or type in to input box
Given there are things for the user to click on
Then make a search with all the selected ingredients and display results

Scenario: User searches for recipes
When a user makes a search
Given the ingredients array is not empty
Then a list of recipes is returned sorted by # of matches to ingredients array

Scenario: User selects a recipe
When a user selects a recipe to cook from the displayed list
Given The recipe exists in our DB or in API
Then recipe saved as our 'active' recipe. ingredients are added to shopping list.

Scenario: Shopping list is compared to shared resources
When a user has selected a recipe
Given the recipe is added and there is a shared resource list
Then each ingredient that is found in the shared resource list is flagged for the user to edit, or remove.

Scenario: A user wants modify an ingredient in the shopping list
When a user clicks on an ingredient
Given the ingredient is in the shopping list
Then the user can mark that the ingredient will be brought by which person

Scenario: user can claim item from list for recipes
When an item is needed for a recipe
Give the item is in the shared foods array (as determined by user) and the shopping list exists
Then the user can edit the item

Scenario: A user wants modify an ingredient in the shared food list
When a user clicks on an ingredient
Given the ingredient is in the shared food list
Then the user can mark that the ingredient as claimed or remove


## Setup/Installation Requirements

TBD

## Known Bugs

TBD

## Support and contact details

_contact Ethan Samuels-Ellingson at ethansamuelsellingson@gmail.com _

TBD

## Technologies Used

TBD

_JavaScript with some ES6 features_

### License

MIT License

Copyright (c) 2019 **_Ethan Samuels-Ellingson, Nikhil Batta, Joel Stockamp, Carrie Schmid_**
