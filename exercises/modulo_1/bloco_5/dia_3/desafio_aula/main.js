const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function removeClassTech () {
  let elementTech = document.querySelector('.tech');
  while (elementTech){
    elementTech.classList.remove('tech');
    elementTech = document.querySelector('.tech');
  }
}

let divContainer = document.querySelector('.container');
divContainer.addEventListener("click", function(event) {
  removeClassTech();
  event.target.classList.add('tech');
});


input.addEventListener("keyup", function() {
  let element = document.querySelector('.tech'); 
  element.innerText = input.value;
});

input.addEventListener("change", function() {
  input.value = '';
});


myWebpage.addEventListener("dblclick", function() {
  location.href = 'https://diego-rib.github.io/';
});


myWebpage.addEventListener("mouseover", function(event) {
  event.target.style.color = '#2fc18c';
});
myWebpage.addEventListener("mouseout", function(event) {
  event.target.style.color = 'white';
});



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