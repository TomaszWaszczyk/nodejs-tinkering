/* 
Design and implement supermarket checkout code with readable API that calculates the total price of a number of items.
Dont need to expose http endpoints, db integration. Just code that is doing logic and keep data (items in cart) in memory. 

Checkout mechanism can:
scan items (add to cart)
return actual price of cart ( is stateful)
Client receives receipt containing list of all products with corresponding prices

Pricing:
Our goods are priced individually
Some items are multipriced: buy n of them, and they’ll cost you y cents

Sample Products:
Product: A, Price: 40, Multiprice: buy 3 for 70
Product: B, Price: 10, Multiprice: buy 2 for 15

Additional samples:
User scan product A 1 time, what is the expected total price? (40)
User scan product A 2 times, what is the expected total price? (80)
User scan product A 3 times, what is the expected total price? (70)
User scan product A 4 times, what is the expected total price? (110)
User scan product A 7 times, what is the expected total price? (170)
*/
