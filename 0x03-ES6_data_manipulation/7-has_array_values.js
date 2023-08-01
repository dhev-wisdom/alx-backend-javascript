export default function hasValuesFromArray(set, array) {
  let bool = true;

  for (let i = 0; i < array.length; i += 1) {
    if (!set.has(array[i])) {
    bool = false;
    break;
    }
  }

  return bool;
}
