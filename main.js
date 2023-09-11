const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    // const { items } = this;
    // for (const {quantity} of items)...

    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    //     const { items } = this;
    //         for (let i = 0; i < items.length; i += 1) {
    //   const item = items[i];
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      // const { name } = this.items[i];
      //   if (productName === name)
      if (productName === item.name) {
        this.items.splice(i, 1);
      }
    }

    // const itemsInCart = this.items.filter((item) => productName !== item.name);
    // console.log(itemsInCart);
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    //   const { items } = this;
    //   for ( {price, quantity } of items);
    //   total += price;

    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (productName === item.name) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (productName === item.name && item.quantity >= 0) {
        item.quantity -= 1;
      }
    }
  },
};

cart.add({ name: "pear", price: 50 });
cart.add({ name: "apple", price: 40 });
cart.add({ name: "apple", price: 40 });
cart.add({ name: "apple", price: 40 });
cart.add({ name: "melone", price: 60 });
cart.add({ name: "banana", price: 20 });

cart.increaseQuantity("pear");
console.log(cart.getItems());

cart.decreaseQuantity("banana");
console.log(cart.getItems());

cart.remove("banana");
console.log(cart.getItems());

// console.log(cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());
