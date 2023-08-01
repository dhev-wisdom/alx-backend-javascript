export default function cleanSet(set, startString) {
  let finalStr = '';
  for (const item of set) {
    if (item.startsWith(startString) && startString !== '') {
      finalStr = `${finalStr}${item.slice(3)}-`;
    }
  }
  if (finalStr.slice(-1) === '-') finalStr = finalStr.slice(0, -1);

  return finalStr;
}
