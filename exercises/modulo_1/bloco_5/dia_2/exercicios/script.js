function newElement(tag, classe) {
  let element = document.createElement(tag);
  element.className = classe;
  return element;
}

let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(titulo);

let mainContent = newElement('div', 'main-content');
document.body.appendChild(mainContent);

