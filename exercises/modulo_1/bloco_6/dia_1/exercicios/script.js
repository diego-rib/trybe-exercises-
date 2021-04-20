const ESTADOS = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

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

function checkCPF() {
  const CPF = document.getElementById('input-cpf').value;
  for(let index = 0; index < 11; index += 1) {
    if(!parseInt(CPF[index])) {
      return false;
    }
  }
  return true;
}

SUBMIT_BTN.addEventListener('click', function(event) {
  event.preventDefault();
  if(!checkCPF()) {
    alert('CPF inválido.');
  } else {
    const FORM_ELEMENTS = document.querySelectorAll('input');
    for(let index = 0; index < FORM_ELEMENTS.length; index += 1) {
      if(FORM_ELEMENTS[index].type === 'radio') {
        continue;
      }
      const NEW_DIV = document.createElement('div');
      NEW_DIV.className = 'field';
      NEW_DIV.innerText = FORM_ELEMENTS[index].value;
      document.getElementById('show-curriculum').appendChild(NEW_DIV);
    }
  }
});

new window.JustValidate('.form', {
  Rules: {
    email: {
        required: true,
        email: true
    },
    name: {
      required: true,
      maxLength: 40
    },
    endereco: {
        required: true,
        maxLength: 200
    },
    cidade: {
        required: true,
        maxLength: 28
    },
    estado: {
        required: true
    },
    radioCasa: {
        required: true
    },
    resumoCurriculum: {
      maxLength: 1000,
      required: true
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    descricaoCargo: {
      required: true,
      maxLength: 500
    },
    cpf: {
      required: true,
      maxLength: 11
    }
}
});
