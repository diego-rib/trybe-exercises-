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

let centerContent = newElement('div', 'center-content');
document.querySelector('.main-content').appendChild(centerContent);

let paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis arcu ac varius. Pellentesque id lacus eget leo eleifend bibendum. Nam aliquet, risus quis hendrerit ullamcorper, mi metus varius velit, et tincidunt elit massa eu eros. Phasellus lacus felis, volutpat eu elit vel, rhoncus aliquam arcu. Ut congue eget sapien id efficitur. Cras at scelerisque tellus. Vestibulum sodales turpis sed dui condimentum interdum. Quisque sapien turpis, sollicitudin id erat vitae, varius posuere leo. Fusce vel urna justo. Nullam eu bibendum leo, at mattis ligula. Proin ac dolor ac purus fringilla rutrum eget quis diam. Nam mollis aliquam suscipit.';
document.querySelector('.center-content').appendChild(paragraph);

let leftContent = newElement('div', 'left-content');
document.querySelector('.main-content').appendChild(leftContent);
