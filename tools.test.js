const { monthsGenerator, getStartingAndEndDay, findOneDate, getPeriode, monthsInRange } = require('./tools');

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

test("Date is not a string", () => {
    expect(() => {
        getStartingAndEndDay("01-29-2022", ["a "]);
    }).toThrow("Both of the dates should be a string in the following format: mm-dd-yyyy");
  })