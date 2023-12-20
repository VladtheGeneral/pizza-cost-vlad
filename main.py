game.splash("Welcome in Pizzeria Mama Mia")
Diameter = game.ask_for_number("What is your diameter")
Material_cost = 0.5
Rental_cost = 1
Labour_cost = 0.75
HST = 0.13
Subtotal = Rental_cost + Labour_cost + Diameter * Material_cost
Tax = Subtotal * HST
Total = Tax + Subtotal
game.splash("This is your total price for " + str(Diameter) + "   inch pizza - " + str(Total) + " CAD")