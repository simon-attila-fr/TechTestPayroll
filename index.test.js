const { payrollPeriodTotal, payrollPeriodWorkdays, monthsTotalInPeriod } = require("./index.js");

test('Days in a period of a year', () => {
    const aYear = payrollPeriodTotal("01-01-2022", "12-31-2022", 2022);
    expect(aYear).toBe(365);
});

test("Should throw an error if there are two different years in the input", () => {
    expect(() => {
        payrollPeriodTotal("01-01-2021", "01-01-2022", 2022);
    }).toThrow("Sorry, this version works only within one year range :(");
  })

// https://www.capeos.fr/quel-est-le-nombre-de-jours-travailles-en-2022/
// "365 jours – 105 jours de week-end" => 365 - 105 = 260

test('Workdays (workday = not weekend) in a period of a year', () => {
    const aYear = payrollPeriodWorkdays("01-01-2022", "12-31-2022", 2022);
    expect(aYear).toBe(260);
});

test('Months in a range of a full year', () => {
    const aYear = monthsTotalInPeriod("01-01-2025", "12-31-2025", 2025);
    expect(aYear).toBe(" January, February, March, April, May, June, July, August, September, October, November, December,");
});