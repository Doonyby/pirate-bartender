$(document).ready(function() {


// //Worker gets the name from the customer.
// var Worker = function() {
// 	var name = prompt("What is your name");
// 	this.name = name;
// }
// //Worker ask's the customer where they prefer to sit (bar, grill, both)
// Worker.prototype.findSeat = function() {
// 	seat = (bar, grill, both)
// }

// //Inherits customer responsibility from where the customer chose to sit (bar, grill, both)
// var Cook = function() {
// 	Worker.call(this, seat);
// }
// Cook.prototype = Object.create(Worker.prototype);
// Cook.prototype.constructor = Cook;

// //Inherits customer responsibility from where the customer chose to sit (bar, grill, both)
// var Bartender = function() {
// 	Worker.call(this, seat);
// }
// Bartender.prototype = Object.create(Worker.prototype);
// Bartender.prototype.constructor = Bartender;
 
// //Inherits questions and answers from which worker asked the question.
// var Questions = function(answer) {
// 	this.answer = answer;
// }


var Pantry = function() {
	this.ingredients = {};
}

Pantry.prototype.getIngredient = function(flavor) {
	if (this.ingredients[flavor]) {
		var random = Math.floor(Math.random() * this.ingredients[flavor].length);
		return this.ingredients[flavor][random];
	}
}

Pantry.prototype.addIngredient = function(pantryItem) {
	if (this.ingredients[pantryItem.flavor]) {
		this.ingredients[pantryItem.flavor].push(pantryItem.name);
	} else {
		this.ingredients[pantryItem.flavor] = [pantryItem.name];
	}
}

var barPantry = new Pantry();
var grillPantry = new Pantry();

var Ingredient = function(flavor, name) {
	this.flavor = flavor;
	this.name = name;
}

var pantryItem = new Ingredient('strong', 'glug of rum');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('strong', 'slug of whisky');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('strong', 'splash of gin');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('salty', 'olive on a stick');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('salty', 'salt-dusted rim');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('salty', 'rasher of bacon');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('bitter', 'shake of bitters');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('bitter', 'splash of tonic');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('bitter', 'twist of lemon peel');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('sweet', 'sugar cube');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('sweet', 'spoonful of honey');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('sweet', 'splash of cola');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('fruity', 'slice of orange');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('fruity', 'dash of cassis');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('fruity', 'cherry on top');
barPantry.addIngredient(pantryItem);

console.log(barPantry);



});