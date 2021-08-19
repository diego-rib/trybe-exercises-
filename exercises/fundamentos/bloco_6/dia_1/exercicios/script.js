const ESTADOS = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

const DROPDOWN_ESTADOS = document.getElementById('dropdown-estado');
const SUBMIT_BTN = document.getElementById('submit-btn');

for (let index = 0; index < ESTADOS.length; index += 1) {
  const NEW_OPTION = document.createElement('option');
  NEW_OPTION.text = ESTADOS[index];
  NEW_OPTION.value = ESTADOS[index];
  DROPDOWN_ESTADOS.appendChild(NEW_OPTION);
}

var picker = new Pikaday({ 
  field: document.getElementById('datepicker'),
  format: 'D MMM YYYY',
  onSelect: function() {
    console.log(this.getMoment().format('Do MMMM YYYY'));
  }
});

document.getElementById('input-cpf').addEventListener('blur', event => {
  const CPF = event.target.value;
  for(let index = 0; index < 11; index += 1) {
    if(!parseInt(CPF[index])) {
      validation.show(event.target, 'Cpf inválido');
    }
  }
});

SUBMIT_BTN.addEventListener('click', function(event) {
  event.preventDefault();
  const FORM_ELEMENTS = document.querySelectorAll('input');
  for(let index = 0; index < FORM_ELEMENTS.length; index += 1) {
    if(FORM_ELEMENTS[index].type === 'radio') {
      continue;
    } else {
      const NEW_DIV = document.createElement('div');
      NEW_DIV.className = 'field';
      NEW_DIV.innerText = FORM_ELEMENTS[index].value;
      document.getElementById('show-curriculum').appendChild(NEW_DIV);
    }
  }
});

validation.init('#form');
