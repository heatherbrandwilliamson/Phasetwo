const candies = [
    { sweetname: 'Aero', price: 1.99 },
    { sweetname: 'Skitties', price: 2.99 },
    { sweetname: 'Mars', price: 1.49 },
    { sweetname: 'Maltesers', price: 3.49 },
    { sweetname: 'Skittles', price: 1.49 },
    { sweetname: 'Starburst', price: 5.99 },
    { sweetname: 'Ricola', price: 1.99 },
    { sweetname: 'Polkagris', price: 5.99 },
    { sweetname: 'Pastila', price: 4.99 },
    { sweetname: 'Mentos', price: 8.99 },
    { sweetname: 'Raffaello', price: 7.99 },
    { sweetname: 'Gummi bears', price: 10.99 },
    { sweetname: 'Fraise Tagada', price: 5.99 }
  ];

function SearchCandies(searchString, maxPrice) {

  const filteredCandies = candies.filter(candy => {
    return candy.sweetname.startsWith(searchString) && candy.price < maxPrice;
  });
  
  
  const candyNames = filteredCandies.map(candy => candy.sweetname);
  
  return candyNames;
  }


module.exports = SearchCandies;
