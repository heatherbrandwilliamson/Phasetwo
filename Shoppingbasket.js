class ShoppingBasket {
    constructor() {
      this.list = [];  // Initialize an empty list in the constructor
    }
  
    addItem(Candy) {
      const candylist = this.list.push(Candy); // Add the item to the list
      return candylist

    }

    // Add all the items 

      getTotalPrice() {
        let totalPrice = 0;
    
        for (let i = 0; i < this.list.length; i++) {
          totalPrice += this.list[i].getPrice();
        }
    
        return totalPrice;
      }
    

  }


module.exports = ShoppingBasket;

