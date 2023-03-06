import ArrayBufferConverter from '../ArrayBufferConverter';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('should be return string "{"data":{"user":{"id":1,"name":"Hitman","level":10}}}"', () => {
  const arrayBufferConverter = new ArrayBufferConverter();

  arrayBufferConverter.load(getBuffer());

  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('should throw on uncorrect type of input data', () => {
  const arrayBufferConverter = new ArrayBufferConverter();

  expect(() => {
    arrayBufferConverter.load([1, 2, 3]);
  }).toThrow();
});
