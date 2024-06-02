const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance; // Dodałam "this" przed "balance"
  },
  getDiscount() {
    return this.discount; // Dodałam "this" przed "discount"
  },
  setDiscount(value) {
    this.discount = value; // Dodałam "this" przed "discount"
  },
  getOrders() {
    return this.orders; // Dodałam "this" przed "orders"
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount; // Dodałam "this" przed "balance" i "discount"
    this.orders.push(order); // Dodałam "this" przed "orders"
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]