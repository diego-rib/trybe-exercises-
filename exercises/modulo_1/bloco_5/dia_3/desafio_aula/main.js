const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function removeClassTech (event) {
  let elementClassList = event.classList;
  for (let index = 0; index < elementClassList.length; index += 1) {
    if (elementClassList[index] === 'tech') {
      elementClassList.remove('tech');
    }
  }
}

function addClassTech (element) {
  while (document.querySelector('.tech')){
    removeClassTech(document.querySelector('.tech'));
  }
  element.target.classList.add('tech');
}

divUm.addEventListener("click", addClassTech);
divDois.addEventListener("click", addClassTech);
divTres.addEventListener("click", addClassTech);

function changeText(event) {
  let element = document.querySelector('.tech'); 
  element.innerText = input.value;
}

input.addEventListener("keyup", changeText);

function cleanInput() {
  input.value = '';
}

input.addEventListener("change", cleanInput);

function redirectPage () {
  location.href = 'https://diego-rib.github.io/';
}

myWebpage.addEventListener("dblclick", redirectPage);

function changeColor (event) {
  event.target.style.color = '#2fc18c';
}

function resetColor (event) {
  event.target.style.color = 'white';
}

myWebpage.addEventListener("mouseover", changeColor);
myWebpage.addEventListener("mouseout", resetColor);

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.