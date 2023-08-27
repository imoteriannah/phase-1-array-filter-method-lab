// Code your solution here
const findMatching = (arr, name) =>
  arr.filter((driver) => driver.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (arr, name) =>
  arr.filter(
    (driver) => driver.toLowerCase().indexOf(name.toLowerCase()) === 0
  );

const matchName = (arr, name) => arr.filter((driver) => driver.name === name);
