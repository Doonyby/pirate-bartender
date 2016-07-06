$(document).ready(function() {

	$('#enterBar').show();
	$('.bar').hide();
	$('button').click(function() {
		$('#enterBar').hide();
		$('.bar').show();
		var name = prompt("What do they call ye?");
		$('#welcome').text("Welcome " + name + "!");
	});

var Worker = function() {
	
}

var Cook = function() {
	
}

Cook.prototype.createBurger = function() {

}

var Bartender = function() {
	
}

Bartender.prototype.createDrink = function() {

} 

//Create a Question constructor that contains an array.
var Questions = function() {
	this.questions = [];
}

//Create the two types of questions.
var barQuestions = new Questions();
var grillQuestions = new Questions();
var workerQuestions = new Questions();

//Push question objects with a flavor and question up into the Question array.
Questions.prototype.addQuestion = function(flavor, question) {
	this.questions.push({flavor, question})
}

//Add questions to the appropriate Question constructor.
barQuestions.addQuestion('strong', 'Do ye like yer drinks strong?');
barQuestions.addQuestion('salty', 'Do ye like it with a salty tang?');
barQuestions.addQuestion('bitter', 'Are ye a lubber who likes it bitter?');
barQuestions.addQuestion('sweet', 'Would ye like a bit of sweetness with yer poison?');
barQuestions.addQuestion('fruity', 'Are ye one for a fruity finish?');

console.log(barQuestions);

grillQuestions.addQuestion('vegetable', 'Are ye a seaweed suckin sissy who likes green with his meat?');
grillQuestions.addQuestion('pig', 'Would ye like some salted pig with yer patty?');
grillQuestions.addQuestion('cheese', 'Do ye like yer beef with a bit of aged curd?');
grillQuestions.addQuestion('gourmet', 'Are ye a fancy scum with a palate for adventure?');
grillQuestions.addQuestion('sauce', 'Do ye like yer patty slimed with sauce?');

console.log(grillQuestions);

workerQuestions.addQuestion('bar', 'Are ye here to quench that thirst of yers?');
workerQuestions.addQuestion('grill', 'Would ye just prefer to fill yer appetite with grub?');
workerQuestions.addQuestion('both', 'Would ye like both the drink and the dry?');

console.log(workerQuestions);

//Create the Pantry object.
var Pantry = function() {
	this.ingredients = {};
}

//Find the ingredient flavor, and pull a random ingredient off of that shelf.
Pantry.prototype.getIngredient = function(flavor) {
	if (this.ingredients[flavor]) {
		var random = Math.floor(Math.random() * this.ingredients[flavor].length);
		return this.ingredients[flavor][random];
	}
}

//If Pantry object has flavor, push ingredient.  If Pantry doesn't have flavor, add flavor and ingredient.
Pantry.prototype.addIngredient = function(pantryItem) {
	if (this.ingredients[pantryItem.flavor]) {
		this.ingredients[pantryItem.flavor].push(pantryItem.name);
	} else {
		this.ingredients[pantryItem.flavor] = [pantryItem.name];
	}
}

//Create pantry for both bar and grill.
var barPantry = new Pantry();
var grillPantry = new Pantry();

//Create an ingredient Constructor and pass in a flavor and name.
var Ingredient = function(flavor, name) {
	this.flavor = flavor;
	this.name = name;
}

//Add different flavors and ingredients to specific Pantry.
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


var pantryItem = new Ingredient('vegetable', 'lettuce');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('vegetable', 'tomato');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('vegetable', 'onion');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('pig', 'bacon');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('pig', 'ham');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('pig', 'spam');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('cheese', 'swiss');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('cheese', 'chedder');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('cheese', 'blue cheese');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('gourmet', 'avacado');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('gourmet', 'mushroom');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('gourmet', 'jalepeno');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('sauce', 'mayonnaise');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('sauce', 'bbq sauce');
grillPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('sauce', 'mustard');
grillPantry.addIngredient(pantryItem);

console.log(grillPantry);

});


//This will be kind of the direction I was heading when I get the UI up and running for new 
//customer objects to be created with whatever input happens.
// var preference = {
// 	name: 'dan',
// 	seat: [
// 		{
// 			seat: 'bar',
// 			strong: 
// 			salty:	
// 			bitter: 
// 			sweet: 
// 			fruity: 		
// 		},
// 		{
// 			seat: 'grill',
// 			vegetable: 
// 			pig: 
// 			cheese: 
// 			gourmet:
// 			sauce: 
			
// 		},
// 		{
// 			seat: 'both',
// 			strong: 
// 			salty:	
// 			bitter: 
// 			sweet: 
// 			fruity: 
// 			vegetable: 
// 			pig: 
// 			cheese: 
// 			gourmet: 
// 			sauce: 
// 		}
// 	]
// };