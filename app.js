$(document).ready(function() {
	var name = "";
	$('#orderDrink').click(function() {
		html = "";
		html += "<p>The name is Bud, what's yours?</p>";
		html += "<form><br>";
		html += "<input type='text' name='name' id='customerName' placeholder='enter name here'><br>";
		html +=	"<input type='submit' id='submitName'></form>";
		$('.action').html(html);
		bud.getName();
	});

	$('#orderBurger').click(function() {
		html = "";
		html += "<p>The name is Clarence, what's yours?</p>";
		html += "<form><br>";
		html += "<input type='text' name='name' id='customerName' placeholder='enter name here'><br>";
		html +=	"<input type='submit' id='submitName'></form>";
		$('.action').html(html);
		clarence.getName();
	});

var Customer = function(name) {
	this.name = name;
	this.drink = drink;
	this.burger = burger;
}

var Worker = function(name) {
	this.name = name;
	this.customers = {};
}

Worker.prototype.getName = function() {
	$('#submitName').click(function(event) {
		event.preventDefault();
		var html = "";
		if ($('#customerName').val() == '') {
			html += "<p>Please enter a name so we're not strangers... Would hate to start off on the wrong foot. Try again.</p>";
		}
		else {
		$('#enterBar').hide();
		name = $('#customerName').val();
		html += "<p>Welcome " + name + "!  Please pick yer poison.</p>";
		}
		$('.action').html(html);
		console.log(bud.name);		
	});
}

var Cook = function(name) {
	Worker.call(this, name)
}
Cook.prototype = Object.create(Worker.prototype);
Cook.prototype.constructor = Cook;

Cook.prototype.createBurger = function() {

}

Cook.prototype.nameBurger = function() {

}

var Bartender = function(name) {
	Worker.call(this, name)
}
Bartender.prototype = Object.create(Worker.prototype);
Bartender.prototype.constructor = Bartender;

Bartender.prototype.createDrink = function() {
	
}

Bartender.prototype.nameDrink = function() {

}

var bud = new Bartender();
var clarence = new Cook(); 

//Create a Question constructor that contains an array.
var Questions = function() {
	this.questions = [];
}

//Create the two types of questions.
var barQuestions = new Questions();
var grillQuestions = new Questions();

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

//console.log(barQuestions);

grillQuestions.addQuestion('vegetable', 'Are ye a seaweed suckin sissy who likes green with his meat?');
grillQuestions.addQuestion('pig', 'Would ye like some salted pig with yer patty?');
grillQuestions.addQuestion('cheese', 'Do ye like yer beef with a bit of aged curd?');
grillQuestions.addQuestion('gourmet', 'Are ye a fancy scum with a palate for adventure?');
grillQuestions.addQuestion('sauce', 'Do ye like yer patty slimed with sauce?');

//console.log(grillQuestions);

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

//console.log(barPantry);


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

//console.log(grillPantry);

});

