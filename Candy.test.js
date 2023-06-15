const Candy = require('./Candy');
const ShoppingBasket = require('./Shoppingbasket');
//jest.mock('./Candy');

describe('ShoppingBasket', () => {
    let candy;
    let basket;
  
    beforeEach(() => {
      candy = new Candy('Mars', 4.99);
      basket = new ShoppingBasket();
    });
  
    it('should return the name of the candy', () => {
        const candyName = candy.getName();
        expect(candyName).toBe('Mars');
      });
    
      it('should return the price of the candy', () => {
        const candyPrice = candy.getPrice();
        expect(candyPrice).toBe(4.99);
      });
    
      it('should return the total price of an empty basket', () => {
        const totalPrice = basket.getTotalPrice();
        expect(totalPrice).toBe(0);
      });
    
      it('should return the total price after adding an item', () => {
        basket.addItem(candy);
        const totalPrice = basket.getTotalPrice();
        expect(totalPrice).toBe(4.99);
      });
    
       it('should return the correct total price after adding multiple items', () => {

        //Use a JS object as a "double" or mock
         const mars1 = new Candy('Mars', 4.99);
         const skittle1 = new Candy('Skittle', 3.99);
         const skittle2 = new Candy('Skittle', 3.99);

         basket.addItem(mars1)
         basket.addItem(skittle1);
         basket.addItem(skittle2);
    
         const totalPrice = basket.getTotalPrice();
         expect(totalPrice).toBe(12.97);
       });
    });

