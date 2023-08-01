const weakmap = new WeakMap();

export function queryAPI(endpoint) {
  const callCount = weakmap.get(endpoint);
  if (!callCount) callCount = 0;
  callCount += 1;
  weakmap.set(endpoint, callCount);
  
  if (callCount >= 5) throw new Error('Endpoint load is high');
}

export default weakmap;
