export default class ArrayBufferConverter {
  load(buffer) {
    if (!(buffer instanceof ArrayBuffer)) {
      throw new Error('Argument must be an ArrayBuffer');
    }
    this.buffer = buffer;
  }

  toString() {
    if (!this.buffer) {
      throw new Error('No buffer loaded. Call load() first.');
    }
    const bufferView = new Uint16Array(this.buffer);
    let result = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}
