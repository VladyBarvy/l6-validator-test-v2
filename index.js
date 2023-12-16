import Validator from './src/Validator.js';

export default Validator;

/*
const v = new Validator();
const schema = v.string();

console.log(schema.isValid(null)); // false
console.log(schema.isValid('')); // true
console.log(schema.isValid(true)); // false
console.log(schema.isValid('123')); // true
console.log(schema.isValid(0)); // false
*/
/*
const v = new Validator();

const schema1 = v.string().hasSpaces();
console.log(schema1.isValid([])); // false;
console.log(schema1.isValid(' ')); // true;
console.log(schema1.isValid('Hexlet')); // false;
*/

const v = new Validator();
const schema1 = v.function();

console.log(schema1.isValid(() => {})); // true;
console.log(schema1.isValid({})); // false;
console.log(schema1.isValid(console.log)); // true;
