const  SearchCandies = require('./search_function.js');


describe('Search Candies', () => {
  test('returns "output" for search by prefix string and number', () => {
    const Result = SearchCandies('Ma', 2);
    const expectedResult = [ 'Mars' ];

    expect(Result).toEqual(expectedResult);
  });

/// TEST TWO ////

  test('returns "output" for search by prefix string and number', () => {
    const Result2 = SearchCandies('Ma', 10);
    const expectedResult2 = [ 'Mars', 'Maltesers' ];

    expect(Result2).toEqual(expectedResult2);
  });

///// more tests here 
});


