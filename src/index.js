import getBuffer from './getBuffer';
import ArrayBufferConverter from './ArrayBufferConverter';

const converter = new ArrayBufferConverter();
const buffer = getBuffer();

converter.load(buffer);
const jsonString = converter.toString();
console.log(jsonString);

if (typeof document !== 'undefined') {
  const pre = document.createElement('pre');
  pre.textContent = jsonString;
  document.body.appendChild(pre);
}
