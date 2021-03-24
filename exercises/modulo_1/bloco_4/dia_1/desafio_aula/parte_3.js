let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId); // number
patientId = '50';
console.log(typeof patientId); // string
console.log(typeof isEnrolled); // boolean 
console.log(typeof patientInfo); // object
console.log(typeof patientEmail); // string

console.log(typeof patientAge); // undefined


let base = 5;
let altura = 8;
let area = base * altura;

console.log(area);

let perimetro = (2 * base) + (2 * altura);

console.log(perimetro);