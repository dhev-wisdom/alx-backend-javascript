export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(8);
  const int16view = new Int16Array(buffer);

  if (buffer.byteLength <= 8) {
    int16view[position] = value;
  }
  else {
    throw new Error('Position outside range');
  }
}
