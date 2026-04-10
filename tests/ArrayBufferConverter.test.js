import ArrayBufferConverter from '../src/ArrayBufferConverter';
import getBuffer from '../src/getBuffer';

describe('ArrayBufferConverter', () => {
  let converter;
  let buffer;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
    buffer = getBuffer();
  });

  test('should load buffer correctly', () => {
    expect(() => converter.load(buffer)).not.toThrow();
    expect(converter.buffer).toBe(buffer);
  });

  test('should throw error when loading non-ArrayBuffer', () => {
    expect(() => converter.load({})).toThrow('Argument must be an ArrayBuffer');
    expect(() => converter.load('string')).toThrow('Argument must be an ArrayBuffer');
    expect(() => converter.load(null)).toThrow('Argument must be an ArrayBuffer');
  });

  test('should convert buffer to string', () => {
    converter.load(buffer);
    const result = converter.toString();
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(result).toBe(expected);
  });

  test('should throw error when converting without loading', () => {
    expect(() => converter.toString()).toThrow('No buffer loaded. Call load() first.');
  });
});
