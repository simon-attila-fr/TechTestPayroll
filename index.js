const { monthsGenerator, getStartingAndEndDay, findOneDate, getPeriode, monthsInRange } = require('./tools');

function payrollPeriodTotal(date1, date2, year) {
    let yearReference = monthsGenerator(year);
    let startAndEnd = getStartingAndEndDay(date1, date2);
    let period = getPeriode(startAndEnd.startingDate, startAndEnd.endDate, yearReference);

    return period.length;
}

function payrollPeriodWorkdays(date1, date2, year) {
    let yearReference = monthsGenerator(year);
    let startAndEnd = getStartingAndEndDay(date1, date2);
    let period = getPeriode(startAndEnd.startingDate, startAndEnd.endDate, yearReference);

    let periodTotal = period.length;
    return period.filter(e => e.workday).length;
}

function monthsTotalInPeriod(date1, date2, year) {
    let yearReference = monthsGenerator(year);
    let startAndEnd = getStartingAndEndDay(date1, date2);
    let period = getPeriode(startAndEnd.startingDate, startAndEnd.endDate, yearReference);

    return monthsInRange(period)
}

console.log(payrollPeriodTotal("01-01-2022", "12-31-2022", 2022));
console.log(payrollPeriodWorkdays("01-01-2022", "12-31-2022", 2022));
console.log(monthsTotalInPeriod("01-01-2022", "12-31-2022", 2022));

function payrollFull(date1, date2, year) {
    let yearReference = monthsGenerator(year);
    let startAndEnd = getStartingAndEndDay(date1, date2);
    let period = getPeriode(startAndEnd.startingDate, startAndEnd.endDate, yearReference);

    let periodTotal = period.length;
    let periodeWorkingDayTotal = period.filter(e => e.workday).length;

    return `Début de congé : ${new Date(date1).toLocaleDateString()}, fin: ${new Date(date2).toLocaleDateString()}
    Période de congé : jours = ${periodTotal}, jours ouvrés = ${periodeWorkingDayTotal}
    Période mensuelles :${monthsInRange(period)}`
}

console.log(payrollFull("01-29-2022", "02-01-2022", 2022));
console.log(payrollFull("05-01-2022", "07-29-2022", 2022));

module.exports = payrollPeriodTotal;