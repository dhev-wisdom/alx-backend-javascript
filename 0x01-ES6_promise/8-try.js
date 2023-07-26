export default function divideFunction(numerator, denominator) {
  /*if (denominator < 1) {
    throw new Error('cannot divide by 0');
  } else {
    return (numerator / denominator);
  }*/


  try {
    if (denominator > 0) {
      const ans = numerator / denominator;
      return ans;
    } else {
      throw new Error('cannot divide by 0');
    }
  } catch (e) {
    return e;
  }
}
