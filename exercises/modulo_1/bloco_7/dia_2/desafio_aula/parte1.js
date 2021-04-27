const obj = {
  name: 'diego',
  lastname: 'ribeiro'
};

const addObjectProp = (object, key, value) => (object[key] = value);

console.log(obj);

addObjectProp(obj, 'age', 20);

console.log(obj);
