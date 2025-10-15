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

type Multiprice = { quantity: number; totalPrice: number };

type Product = {
  id: string;
  name: string;
  price: number;
  multiprice?: Multiprice;
};

type CartLine = {
  product: Product;
  quantity: number;
  lineTotalPrice: number;
};

type Receipt = {
  lines: CartLine[];
  total: number;
};

class SupermarketCheckout {
  private products = new Map<string, Product>();
  private cart = new Map<string, number>();

  constructor(products: Product[]) {
    products.forEach(p => this.products.set(p.id, p));
  }

  // Scan product by id, increments cart count
  scan(productId: string): void {
    if (!this.products.has(productId)) throw new Error(`Product ${productId} not found`);
    this.cart.set(productId, (this.cart.get(productId) ?? 0) + 1);
  }

  // Return total price in cart (stateful)
  total(): number {
    return this.receipt().total;
  }

  // Return detailed receipt for client
  receipt(): Receipt {
    const lines: CartLine[] = [];
    let total = 0;

    for (const [id, quantity] of this.cart.entries()) {
      const product = this.products.get(id)!;
      const { price, multiprice } = product;
      let lineTotalPrice = 0;

      if (multiprice) {
        const numDeals = Math.floor(quantity / multiprice.quantity);
        const singleItems = quantity % multiprice.quantity;
        lineTotalPrice = numDeals * multiprice.totalPrice + singleItems * price;
      } else {
        lineTotalPrice = quantity * price;
      }

      lines.push({ product, quantity, lineTotalPrice });
      total += lineTotalPrice;
    }

    return { lines, total };
  }
}

// Usage and test cases
const checkout = new SupermarketCheckout([
  { id: 'A', name: 'Product A', price: 40, multiprice: { quantity: 3, totalPrice: 70 } },
  { id: 'B', name: 'Product B', price: 10, multiprice: { quantity: 2, totalPrice: 15 } },
]);

// --- Tests for Product A ---
checkout.scan('A');
console.log(checkout.total()); // 40

checkout.scan('A');
console.log(checkout.total()); // 80

checkout.scan('A');
console.log(checkout.total()); // 70

checkout.scan('A');
console.log(checkout.total()); // 110

checkout.scan('A');
checkout.scan('A');
checkout.scan('A'); // Total 7 x A
console.log(checkout.total()); // 170

// --- Receipt example ---
console.log(checkout.receipt());
