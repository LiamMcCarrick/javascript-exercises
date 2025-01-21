const findTheOldest = function(people) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const oldest = people.sort((a, b) => {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = currentYear;
        }
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = currentYear;
        }
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;});
    return oldest[0];
};

    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
