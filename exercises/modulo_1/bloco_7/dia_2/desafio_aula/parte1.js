const obj = {
  name: 'diego',
  lastname: 'ribeiro'
};

function addObjectProp (object, key, value) {
  return object[key] = value;
}

console.log(obj);

addObjectProp(obj, 'age', 20);

console.log(obj);
