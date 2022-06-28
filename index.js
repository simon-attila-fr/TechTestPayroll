const { monthsGenerator, getStartingAndEndDay, findOneDate, getPeriode, monthsInRange } = require('./tools');

// This function checks if there are fidderent years in the range.
// This version works only in one year range.

function yearCheck(date1, date2, year) {
    if (new Date(date1).getFullYear() !== year || new Date(date2).getFullYear() !== year) {
        throw new Error("Sorry, this version works only within one year range :(")
    }
}

// This function can define the number of days included in a range.
// It accepts three arguments: starting date, end, year.
// It returns an integer.

function payrollPeriodTotal(date1, date2, year) {

    yearCheck(date1, date2, year);

    let yearReference = monthsGenerator(year);
    let startAndEnd = getStartingAndEndDay(date1, date2);
    let period = getPeriode(startAndEnd.startingDate, startAndEnd.endDate, yearReference);

    return period.length;
}

// This function defines the number of workdays in a range.
// It accepts three arguments: starting date, end, year.
// It returnes an integer.

function payrollPeriodWorkdays(date1, date2, year) {

    yearCheck(date1, date2, year);

    let yearReference = monthsGenerator(year);
    let startAndEnd = getStartingAndEndDay(date1, date2);
    let period = getPeriode(startAndEnd.startingDate, startAndEnd.endDate, yearReference);

    return period.filter(e => e.workday).length;
}

// This function defines the months included in a range.
// It accepts three arguments: starting date, end, year.
// It returnes the name of the months as a string.

function monthsTotalInPeriod(date1, date2, year) {

    yearCheck(date1, date2, year);

    let yearReference = monthsGenerator(year);
    let startAndEnd = getStartingAndEndDay(date1, date2);
    let period = getPeriode(startAndEnd.startingDate, startAndEnd.endDate, yearReference);

    return monthsInRange(period)
}

// This function gives a detailed response.
// It accepts three arguments: starting date, end, year.

function payrollFull(date1, date2, year) {

    yearCheck(date1, date2, year);

    let yearReference = monthsGenerator(year);
    let startAndEnd = getStartingAndEndDay(date1, date2);
    let period = getPeriode(startAndEnd.startingDate, startAndEnd.endDate, yearReference);

    let periodTotal = period.length;
    let periodeWorkingDayTotal = period.filter(e => e.workday).length;

    return `Début de congé : ${new Date(date1).toLocaleDateString()}, fin: ${new Date(date2).toLocaleDateString()}
    Période de congé : jours = ${periodTotal}, jours ouvrés = ${periodeWorkingDayTotal}
    Période mensuelles :${monthsInRange(period)}`
}

//console.log(payrollFull("01-01-2021", "12-31-2021", 2021));

module.exports = { payrollPeriodTotal, payrollPeriodWorkdays, monthsTotalInPeriod };