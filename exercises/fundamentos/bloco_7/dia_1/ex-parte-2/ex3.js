const btn = document.querySelector('#click-btn');
const countP = document.querySelector('#clickCount');

sessionStorage.setItem('count', 0);
countP.innerText = `Número de cliques: ${sessionStorage.getItem('count')}`;

btn.addEventListener('click', () => {
  sessionStorage.count = parseInt(sessionStorage.count, 10) + 1;
  countP.innerText = `Número de cliques: ${sessionStorage.getItem('count')}`;
});