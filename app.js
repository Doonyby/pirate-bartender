$(document).ready(function() {
	
	function enter() {
		$('#askName').hide();
		$('#order').hide();
		$('#enterBar').show();
		$('#openBar').click(function() {
			orderWhat();
		});
	}

	function orderWhat() {
		$('#enterBar').hide();
		$('#askName').hide();
		$('#order').show();
		var html = "";
		html += "<p>What would you like sailor?</p><br>";
		$('#comment').html(html);
		var html2 = "";
		html2 += "<button id='orderDrink'>I want a drink!</button>"
	    html2 += "<button id='orderBurger'>I want a burger!</button><br>"
		$('#barGrill').html(html2);
		$('#orderDrink').click(function() {
			var html = "";
			html += "<br><p>The name is Bud, what's yours?</p>";
			$('#dialogue').html(html);
			choseBar();
		});

		$('#orderBurger').click(function() {
			var customer = "";
			var html = "";
			html += "<br><p>The name is Clarence, what's yours?</p>";
			$('#dialogue').html(html);
			choseGrill();
		});	
	}

	function choseBar() {
		var customer = "";
		var html = "";
		html += "<form><br><input type='text' name='name' id='customerName' placeholder='enter name here'><br>";
		html += "<br><input type='submit' id='submitName'></form>";
		$('#action').html(html);
		$('#submitName').click(function(event) {
			event.preventDefault();
			var html = "";
			if ($('#customerName').val() == '') {
				html += "<p>Please enter a name so we're not strangers... Would hate to start off on the wrong foot.</p>";
				$('#dialogue').html(html);
			}
			else {
				customer = $('#customerName').val();
				budsCustomer(customer);
			}
		});
	}

	function choseGrill() {
		var customer = "";
		var html = "";
		html += "<form><br><input type='text' name='name' id='customerName' placeholder='enter name here'><br>";
		html += "<br><input type='submit' id='submitName'></form>";
		$('#action').html(html);
		$('#submitName').click(function(event) {
			event.preventDefault();
			var html = "";
			if ($('#customerName').val() == '') {
				html += "<p>Please enter a name so we're not strangers... Would hate to start off on the wrong foot.</p>";
				$('#dialogue').html(html);
			}
			else {
				customer = $('#customerName').val();
				clarencesCustomer(customer);
			}
		});
	}

	function budsCustomer(customer) {
		var name = customer;
		bud.getName(name);
		bud.getDrink(name);
	}

	function clarencesCustomer(customer) {
		var name = customer;
		clarence.getName(name);
		clarence.getBurger(name);
	}

var Customer = function(name) {
	this.name = name;
	this.drink = "";
	this.burger = "";
}

var Worker = function(name) {
	this.name = name;
	this.customers = {};
}

Worker.prototype.getName = function(name) {
	var html = "";
	if (this.customers[name]) {
		html += "<br><p>Good to have you back " + name + "!";
	}
	else {
		this.customers[name] = new Customer(name);
		html += "<br><p>Glad you stopped by " + name + "! New company is always welcome!</p><br>";
	}
	$('#dialogue').html(html);
	$('#comment').html("<p>Welcome to the Seaside Bar and Grill!!!</p><br>")
	$('#action').html("");		
}

var Cook = function(name) {
	Worker.call(this, name)
}
Cook.prototype = Object.create(Worker.prototype);
Cook.prototype.constructor = Cook;

Cook.prototype.getBurger = function(name) {
	if (this.customers[name].burger) {
		console.log('getting a burger for ' + name);
	}
	else {
		clarence.createBurger(name);
	}
}

Cook.prototype.createBurger = function() {
	var html = ""
	html += "<p>How do ye prefer yer stack:</p><br><form>";
	for (var i=0; i<grillQuestions.questions.length; i++) {
		html += "<input type='radio' value='" + grillQuestions.questions[i].flavor + "'> " + grillQuestions.questions[i].question + "<br><br>";
	}
	html += "<br><input type='submit' id='burgerMaker' value='Make my burger!'>"
	$('#action').html(html);
}

Cook.prototype.nameBurger = function() {

}

var Bartender = function(name) {
	Worker.call(this, name)
}
Bartender.prototype = Object.create(Worker.prototype);
Bartender.prototype.constructor = Bartender;

Bartender.prototype.getDrink = function(name) {
	if (this.customers[name].drink) {
		$('#action').html("<p>Here's another \"" + this.customers[name].drink + "\" for ye!</p>")
	}
	else {
		bud.createDrink(name);
	}
}

Bartender.prototype.createDrink = function(name) {
	var choices = [];
	var html = "";
	html += "<p>How do ye prefer yer poison:</p><br><form>";
	for (var i=0; i<barQuestions.questions.length; i++) {
		html += "<input type='radio' value='" + barQuestions.questions[i].flavor + "'> " + barQuestions.questions[i].question + "<br><br>";
	}
	html += "<br><input type='submit' id='drinkMixer' value='Mix my drink!'>";
	$('#action').html(html);
	$('#drinkMixer').click(function(event) {
		event.preventDefault();
        $.each($("input[type='radio']:checked"), function() {            
            choices.push($(this).val()); 
        });
        barPantry.getIngredient(choices);
        bud.nameDrink(name);
	});
}

Bartender.prototype.nameDrink = function(name) {
	var html = "";
	var nouns = ["Whale", "Lubber", "Scabber", "Ship", "Sea", "Pirate"];
	var adjs = ["Lardy", "Black", "Jumpin", "Furious", "Grimy", "Slappin"];
	var randomNoun = Math.floor(Math.random() * nouns.length);
	var randomAdj = Math.floor(Math.random() * adjs.length);
	var noun = nouns[randomNoun];
	var adj = adjs[randomAdj];
	html += "<br><p>Yarr!  Here be yer drink " + name + "!  A \"" + adj + " " + noun + "\" for ye!</p>" 
	$('#dialogue').html(html);
	this.customers[name].drink += adj + " " + noun;
	console.log(this.customers[name].drink);
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
	var mixIns = [];
	var html = "";
	var last = "";
	for (var i=0; i<flavor.length; i++) {
		if (this.ingredients[flavor[i]]) {
			var random = Math.floor(Math.random() * this.ingredients[flavor[i]].length);
			mixIns.push(this.ingredients[flavor[i]][random]);	
		}
	}
	html += "<p>Mixed with ";
	if (mixIns.length == 1) {
		last = mixIns.join() + "!";
		html += last;
	} else {
		var pop = mixIns.pop();
		html += mixIns.join(", ");
		last = ", and " + pop + "!</p>";
		html += last
	}
	$('#action').html(html);
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
var pantryItem = new Ingredient('strong', 'a glug of rum');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('strong', 'a slug of whisky');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('strong', 'a splash of gin');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('salty', 'an olive on a stick');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('salty', 'a salt-dusted rim');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('salty', 'a rasher of bacon');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('bitter', 'a shake of bitters');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('bitter', 'a splash of tonic');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('bitter', 'a twist of lemon peel');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('sweet', 'a sugar cube');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('sweet', 'a spoonful of honey');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('sweet', 'a splash of cola');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('fruity', 'a slice of orange');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('fruity', 'a dash of cassis');
barPantry.addIngredient(pantryItem);
var pantryItem = new Ingredient('fruity', 'a cherry on top');
barPantry.addIngredient(pantryItem);

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

enter();
});

