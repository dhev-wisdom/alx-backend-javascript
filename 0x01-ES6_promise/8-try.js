export default function divideFunction(numerator, denominator) {
  if (denominator < 1) {
    throw new Error('cannot divide by 0');
  } else {
    return (numerator / denominator);
  }
}
