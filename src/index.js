//import lowerCase from "lodash/lowerCase";

const isLetter = l => /[a-z]/.test(l);

function countLetter(s) {
  return s
    .split("")
    .map(l => l.toLowerCase())
    .filter(isLetter)
    .reduce((acc, l) => {
      acc[l] = (acc[l] || 0) + 1;
      return acc;
    }, {});
}

export { countLetter };
