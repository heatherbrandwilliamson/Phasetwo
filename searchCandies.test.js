const  SearchCandies = require('./search_function.js');


describe('Search Candies', () => {
  test('returns "output" for search by prefix string and number', () => {
    const Result = SearchCandies('Ma', 2);
    const expectedResult = [ 'Mars' ];

    expect(Result).toEqual(expectedResult);
  });

/// TEST TWO ////////////////

  test('returns "output" for search by prefix string and number', () => {
    const Result2 = SearchCandies('Ma', 10);
    const expectedResult2 = [ 'Mars', 'Maltesers' ];

    expect(Result2).toEqual(expectedResult2);
  });

///// TEST THREE ///////////////

    test('returns "output" for search by prefix string and number', () => {
    const Result3 = SearchCandies('S', 10);
    const expectedResult3 = [ 'Skitties', 'Skittles', 'Starburst' ];

    expect(Result3).toEqual(expectedResult3);
  });

  test('returns "output" for search by prefix string and number', () => {
    const Result3 = SearchCandies('S', 4);
    const expectedResult3 = [ 'Skitties', 'Skittles' ];

    expect(Result3).toEqual(expectedResult3);
  });

});


