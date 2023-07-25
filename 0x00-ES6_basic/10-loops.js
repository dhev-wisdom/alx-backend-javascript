export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, val] of array.entries()) {
    array[idx] = appendString + val;
  }

  return array;
}
