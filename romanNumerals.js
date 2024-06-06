function toRomanLazy(num) {
  let output = "";
  const romanNumeralToArabic = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    IX: 9,
    VIII: 8,
    VII: 7,
    VI: 6,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1;
}
let romanNumeralPriorityOrder = [M, D, C, L, X, IX, VIII, VII, VI, V, IV, III, II, I]

function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };
