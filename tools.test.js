const { monthsGenerator, getStartingAndEndDay, findOneDate, getPeriode, monthsInRange } = require('./tools');


// Tests for the monthsGenerator function
test("Should throw an error if year is not an integer", () => {
    expect(() => {
        monthsGenerator("a");
    }).toThrow("The year should be an integer.");
  })

test('Number of months', () => {
    const nbMonths = monthsGenerator(2022).length;
    expect(nbMonths).toBe(12);
});

test('Bissextiles', () => {
    const feb = monthsGenerator(2024)[1].length;
    expect(feb).toBe(29);
});

test('01/01', () => {
    const firstDay = monthsGenerator(2022)[0][0].dayObj.toLocaleDateString();
    expect(firstDay).toBe("01/01/2022");
});

// // Tests for the getStartingAndEndDay function

test("One of the input dates (or both) is not a string", () => {
    expect(() => {
        getStartingAndEndDay("01-29-2022", ["a "]);
    }).toThrow("Both of the dates should be a string in the following format: mm-dd-yyyy");
  })

  test("There is at least one letter in a date input.", () => {
    expect(() => {
        getStartingAndEndDay("01-29-2022", "02-01-20aa");
    }).toThrow("There should be numbers between the dashes in the following format: mm-dd-yyyy");
  })

  test("Invalid date input.", () => {
    expect(() => {
        getStartingAndEndDay("01-32-2022", "02-15-2022");
    }).toThrow("Please verify the month and the day in your dates! Format: mm-dd-yyyy");
  })

  test("Timetravelling error :) => Starting date is bigger then the ending date.", () => {
    expect(() => {
        getStartingAndEndDay("01-29-2022", "01-15-2022");
    }).toThrow("Timetraveling hasn't been invented (yet). The end of the period should be after the beginning.");
  })