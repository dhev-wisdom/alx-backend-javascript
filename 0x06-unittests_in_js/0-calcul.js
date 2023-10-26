const calculateNumber = (a, b) => {
  if (isNaN(a) || isNaN(b)) return NaN;
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber; 
