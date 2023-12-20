game.splash("Welcome in Pizzeria Mama Mia")
let Diameter = game.askForNumber("What is your diameter")
let Material_cost = 0.5
let Rental_cost = 1
let Labour_cost = 0.75
let HST = 0.13
let Subtotal = Rental_cost + Labour_cost + Diameter * Material_cost
let Tax = Subtotal * HST
let Total = Tax + Subtotal
game.splash("This is your total price for " + Diameter + "   inch pizza - " + Total + " CAD")
