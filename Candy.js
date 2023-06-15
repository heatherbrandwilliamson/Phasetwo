class Candy {

    // A constructor, to give initial arguments.
    constructor(sweetname, price) {
  
      // We can define attributes stored on the instance with `this`
      this.sweetname = sweetname;
      this.price = price;
    }
  
    getName() {
        return this.sweetname;
    }
    
    // A method.
    getPrice() {
      return this.price;
    }

    getDescription() {
        return "a nice sweet";
      }
  }
  
  // Export the class
module.exports = Candy;




